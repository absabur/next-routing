import { NextResponse } from "next/server";

export function middleware(request) {
    // const path = request.nextUrl.pathname;

    // if (path.startsWith('/profile/')) {
    //     return NextResponse.redirect(new URL('/', request.nextUrl));
    // }

    // // Array of protected routes
    // const protectedRoutes = [];

    // // Check if the path is one of the protected routes and the token is false
    // if (protectedRoutes.includes(path)) {
    //     return NextResponse.redirect(new URL('/', request.nextUrl));
    // }

    // // Allow access to other routes
    return NextResponse.next();

} 