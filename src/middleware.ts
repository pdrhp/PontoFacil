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
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/auth/login', '/auth/signup', '/']

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

  const path = request.nextUrl.pathname;
  const isProtected = protectedRoutes.includes(path);
  const isPublic = publicRoutes.includes(path);

  console.log('path: ', path);
  console.log('origin:', request.url);
  console.log('basepath', request.nextUrl.basePath);
  console.log('idk', request.nextUrl.host)
  console.log('2', request.nextUrl.href)
  console.log('3', request.nextUrl.origin);


  if(request.nextUrl.pathname === '/'){
    return NextResponse.redirect(new URL('pontofacil/auth/login', request.nextUrl.origin));
  }

  // if (request.nextUrl.pathname.startsWith("/_next")) {
  //   return NextResponse.next();
  // }

  const cookie = cookies().get('token');

  if (isProtected && !cookie) {
    console.log(1);
    return NextResponse.redirect(new URL('pontofacil/auth/login', request.nextUrl.origin));
  }


  if (cookie) {
    const token = cookie.value;

    try {
      const response: TokenResponse = await ValidateToken(token);
      if (response.validToken === false) {
        console.log(2);
        throw new Error('Invalid token');
      }

      if (response.validToken === true) {
        console.log(3);
        if (request.nextUrl.pathname === '/auth/login'
          || request.nextUrl.pathname === '/') {
            console.log(4);
          return NextResponse.redirect(new URL('pontofacil/dashboard', request.nextUrl.origin));
        }
      }
    }
    catch (e) {
      console.log('5');
      const response = NextResponse.redirect(new URL('pontofacil/auth/login', request.nextUrl.origin));
      response.cookies.delete('token');
      return response;
    }
  }

}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)',
    { source: '/'}
  ]
  
}