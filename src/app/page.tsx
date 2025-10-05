"use client"
import Link from "next/link";
import {useQuery} from "@tanstack/react-query";

async function getData() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    };

    const response = fetch(
        "https://jsonplaceholder.typicode.com/todos",
        options
    )
        .then((response) => response.json())
        .catch((err) => console.error(err));

    return response;
}

async function getMovies() {
    const data = await getData();
    return data;
}

export default function HomePage() {
    const {data, isLoading, isError} = useQuery({
        queryKey: ["movies"],
        queryFn: async () => await getMovies(),
    })

    if (isLoading) return <h1>Loading....</h1>;
    if (isError) return <div>Sorry There was an Error</div>;

    return (
        <div>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/about">About Page</Link>
            {data.map((item) => (
                <h3 key={item.id}>{item.title}</h3>
            ))}
        </div>
    )
}