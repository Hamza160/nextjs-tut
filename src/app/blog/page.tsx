import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: {
        absolute: "Blog Page", // escape from parent meta title's template
    },
}

export default async function BlogPage() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return <h1>My Blog</h1>
}