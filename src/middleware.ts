'use server';

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { ValidateToken } from './services/AuthService';

interface TokenResponse {
  flag: boolean;
  message: string;
  validToken: boolean;
  token: string;
}

const BASEURL = process.env.BASE_URL;

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  const cookie = cookies().get('token');

  if (!cookie && request.nextUrl.pathname !== '/auth/login') {
    return NextResponse.redirect(new URL('auth/login', BASEURL));
  }

  if (cookie) {
    const token = cookie.value;

    try {
      const response: TokenResponse = await ValidateToken(token);
      if (response.validToken === false) {
        throw new Error('Invalid token');
      }

      if (response.validToken === true) {
        if (request.nextUrl.pathname === '/auth/login'
          || request.nextUrl.pathname === '/') {
          return NextResponse.redirect(new URL('dashboard', request.nextUrl.origin));
        }
      }
    }
    catch (e) {
      return NextResponse.redirect(new URL('auth/login', request.url));
    }
  }

}

export const config = {
  matcher: ['/((?!auth/signup).*)'],
}  