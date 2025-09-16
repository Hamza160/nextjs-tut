"use client"
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const navLinks = [
    {name: "Register", url: "/register"},
    {name: "Login", url: "/login"},
    {name: "Forgot Password", url: "/forgot-password"}
]

export default function AuthLayout({children}: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <>
            <div>
                {navLinks.map(link => {
                        const isActive = pathname === link.url || (pathname.startsWith(link.url) && link.url !== '/');
                        return (
                            <Link
                                className={isActive ? 'text-orange-500 mr-4' : 'text-blue-500 mr-4'}
                                key={link.url}
                                href={link.url}
                            >
                                {link.name}
                            </Link>
                        )
                    }
                )}
            </div>
            {children}
        </>
    )
}