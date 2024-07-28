import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {removeFromStorage} from "@/services/auth/auth.helper";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, response: NextResponse) {
    const token = request.cookies.get('token')

    if (!token && request.nextUrl.pathname.startsWith('/profile')) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (!token && request.nextUrl.pathname.startsWith('/payment')) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/case') && request.nextUrl.pathname.endsWith('/case')) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}