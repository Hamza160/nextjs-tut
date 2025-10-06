"use client"
import Link from "next/link";
import {useQuery} from "@tanstack/react-query";

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

export default function HomePage() {
    const {data, error, isLoading, isError} = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });

    if (isLoading) return <h1>Loading....</h1>
    if (isError) return <h1>Error: {(error as Error).message}</h1>

    return (
        <div>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/about">About Page</Link>
            {data && data.length > 0 && data.map(post => (
                <h3 key={post.id}>{post.title}</h3>
            ))}
        </div>
    )
}