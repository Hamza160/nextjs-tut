import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Services"
}
export default function ServicesLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <h1>Services Header</h1>
        {children}
    </div>
  );
}

