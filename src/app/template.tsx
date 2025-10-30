"use client"
import React, {useEffect} from 'react';
import {usePathname} from "next/navigation";

export default function Template({children}: { children: React.ReactNode }) {
    const [state, setState] = React.useState("test value")
    const [pageBgColor, setPageBgColor] = React.useState('bg-blue-300');
    const pathname = usePathname()

    const randomColors = [
        'bg-blue-300',
        'bg-green-300',
        'bg-yellow-300',
        'bg-green-300',
        'bg-pink-300',
        'bg-zinc-300',
        'bg-silver-300',
        'bg-purple-300',
    ]

    useEffect(() => {
        const index = Math.floor(Math.random() * randomColors.length)
        const pickedColor = randomColors[index]
        setPageBgColor(pickedColor)
    }, [pathname]);

    return (
        <div className={`w-full h-screen ${pageBgColor}`}>
            <input type="text" value={state} onChange={e => setState(e.target.value)}/>
            {children}
        </div>
    );
}

