"use client"
import {usePathname} from "next/navigation";

export default function NotFound() {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <div>
            <h1>Blog Page Not Found</h1>
            <p>Colud not found the page your are looking for</p>
        </div>
    );
}

