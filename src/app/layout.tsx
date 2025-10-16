import type { Metadata } from 'next';
import React from "react";

export const metadata: Metadata = {
    title:{
        default: "Technical Agency",
        template: "%s | Technical Agency"
    },
    description:"Technical Agency",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
      </body>
    </html>
  )
}
