import React from 'react';
import Link from "next/link";
export default function HomePage() {
    return (
        <div>
            <h1>Technical Agency</h1>
            <Link href={"/blogs"}>Blog Page</Link> {" "}
            <Link href={"/about"}>About Page</Link> {" "}
            <Link href={"/services"}>Services Page</Link>
        </div>
    );
}

