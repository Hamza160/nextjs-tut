import Link from "next/link";

export default function HomePage (){
    return (
        <div>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/about">About Page</Link>
            <h1>Hello From Home Page</h1>
        </div>
    )
}