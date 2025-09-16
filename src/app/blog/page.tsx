import type { Metadata } from 'next';
export const metadata:Metadata = {
    title: {
        absolute:"Blog Page", // escape from parent meta title's template
    },
}

export  default  function BlogPage(){
    return <h1>My Blog</h1>
}