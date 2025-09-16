import Link from 'next/link';
export default function HomePage() {
    return (
        <>
            <h1>Hello From Home Page</h1>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
        </>
    )
}