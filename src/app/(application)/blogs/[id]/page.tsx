import type {Metadata} from 'next';
import React from 'react';
import {notFound} from "next/navigation";

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
    if (!/^\d+$/.test(id)) {
        notFound();
    }
    return (
        <div>Blog Details for {id}</div>
    );
}

