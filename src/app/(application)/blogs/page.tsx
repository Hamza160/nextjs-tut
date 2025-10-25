import React, {Suspense} from 'react';
import Link from "next/link";
import {Metadata} from "next";
import Views from "@/components/views";
import Likes from "@/components/likes";
import Comments from "@/components/comments";

export const metadata: Metadata = {
    title: "Blogs"
}

export default function AboutPage() {
    return (
        <div>
            <h1>About Page</h1>
            <Link href="/blogs/1">Blog 1</Link>
            <Link href="/blogs/2">Blog 2</Link>
            <Link href="/blogs/3">Blog 3</Link>
            <Likes/>
            <Suspense fallback={<div>Loading Views...</div>}>
                <Views/>
            </Suspense>
            <Suspense fallback={<div>Loading Comments...</div>}>
                <Comments/>
            </Suspense>
        </div>
    );
}

