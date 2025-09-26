// Custom matcher config

import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

// export function middleware(req: NextRequest){
//     return NextResponse.redirect(new URL("/", req.url));
// }
//
// export const config = {
//     matcher:"/profile"
// }

// Conditional statements

export function middleware(req: NextRequest){

    if(req.nextUrl.pathname === '/profile'){
        // return NextResponse.redirect(new URL("/hello", req.url));
        return NextResponse.rewrite(new URL("/hello", req.url)); // it will not change the url but change the page content
    }
}
