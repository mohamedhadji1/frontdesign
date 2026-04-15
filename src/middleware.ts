import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
if (request.nextUrl.pathname.endsWith(".map")) {
    return new NextResponse(null, { status: 404 });
  }
    return NextResponse.next();
}

export const config = {
  matcher: ['/admin-secret-url/:path*', '/:path*.map'],
};
