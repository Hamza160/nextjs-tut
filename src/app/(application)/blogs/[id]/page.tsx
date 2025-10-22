import type {Metadata} from 'next';
import React from 'react';
import {notFound} from "next/navigation";

export const dynamicParams = false
// export const revalidate = 5

export async function generateMetadata({params}: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const {id} = await params
    return {
        title: `Blog ${id}`,
    }
}

export async function generateStaticParams() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return data.map((item: { id: string; }) => {
        return {
            id: String(item.id),
        }
    })
}

export default async function BlogDetails({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        next: {revalidate: 5}
    });
    const data = await response.json();

    if (!/^\d+$/.test(id)) {
        notFound();
    }
    return (
        <div>
            <h1>Blog Details for {id}</h1>
            <h2>Date: {new Date().toLocaleString()}</h2>
        </div>
    );
}

