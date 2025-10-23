import React from 'react';
import Link from "next/link";

// export const dynamic = "auto";
// export const dynamic = "force-static";
// export const dynamic = "error";
export const dynamic = "force-dynamic";

export default function ServicesPage() {
    console.log('Running ServicesPage');
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

