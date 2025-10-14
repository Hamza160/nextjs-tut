
import React from 'react';
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
        <h1>Hello World</h1>
        <Link href={"/about"}>About Page</Link> {" "}
        <Link href={"/services"}>Services Page</Link>
    </div>
  );
}

