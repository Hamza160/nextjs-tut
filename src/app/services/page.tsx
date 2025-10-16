import React from 'react';
import Link from "next/link";
import type {Metadata} from "next";

export default function ServicesPage() {
  return (
    <div>
        <h1>All Services</h1>
        <p><Link href="/services/app-dev">App Development</Link></p>
        <p><Link href="/services/web-dev">Web Development</Link></p>
        <p><Link href="/services/design">App/Web Design</Link></p>
        <p><Link href="/services/seo">SEO</Link></p>
    </div>
  );
}

