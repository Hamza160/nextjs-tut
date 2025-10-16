import React from 'react';
import Link from "next/link";
import {Metadata} from "next";

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
    </div>
  );
}

