import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { decrypt } from '@/utils/session';

const protectedRoutes = [
  '/contacts',
  '/contacts/[contactId]',
  '/contacts/[contactId]/edit',
];
const publicRoutes = ['/', '/signup', '/login'];

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  if (isPublicRoute) {
    return NextResponse.next();
  }

  try {
    const cookiesStore = await cookies();
    const cookie = cookiesStore.get('session')?.value;
    const session = await decrypt(cookie);

    if (isProtectedRoute && !session?.userId) {
      return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    return NextResponse.next();
  } catch (e) {
    console.error(e);

    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
