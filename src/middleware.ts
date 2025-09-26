
import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export function middleware(req: NextRequest){
    const response =  NextResponse.next()
    // Cookie Handling
    const themePreference = req.cookies.get('theme')

    if(!themePreference){
        response.cookies.set('theme', 'dark')
    }
    // Headers Handling
    response.headers.set('Content-Type', 'text/html')

    return response
}

