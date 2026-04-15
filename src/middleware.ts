import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Middleware placeholder - route protection handled by API endpoint
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin-secret-url/:path*'],
};
