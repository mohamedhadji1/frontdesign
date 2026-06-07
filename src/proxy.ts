import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  // Handle source map requests
  if (request.nextUrl.pathname.endsWith(".map")) {
    return new NextResponse(null, { status: 404 });
  }

  const nonce = crypto.randomUUID();
  
  // Set CSP with strict-dynamic and the generated nonce
  // React requires 'unsafe-eval' in development mode for hot module replacement
  const isDev = process.env.NODE_ENV !== 'production';
  const scriptSrc = isDev 
    ? `script-src 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval';`
    : `script-src 'nonce-${nonce}' 'strict-dynamic';`;
    
  const csp = `${scriptSrc} object-src 'none'; base-uri 'none';`;

  // Clone headers to inject nonce and CSP
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', csp);

  // Check auth for admin routes
  if (request.nextUrl.pathname.startsWith('/admin-secret-url')) {
    const sessionCookie = request.cookies.get('admin_session');
    
    // If trying to access a nested admin route without auth, redirect to the login form
    if (!sessionCookie && request.nextUrl.pathname !== '/admin-secret-url') {
      return NextResponse.redirect(new URL('/admin-secret-url', request.url));
    }
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Apply CSP to the response
  response.headers.set('Content-Security-Policy', csp);

  return response;
}

export const config = {
  // Combined matcher to cover admin routes, CSP application, and source maps
  matcher: [
    '/admin-secret-url/:path*',
    '/:path*.map',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
