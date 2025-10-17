import type { Metadata } from 'next';
import React from 'react';
import Link from "next/link";

export const metadata: Metadata = {
    title: "About"
}
export default function BlogsPage() {
  return (
    <div>
        <h1>Blogs Page</h1>
        <Link href="/">Home</Link>
    </div>
  );
}

