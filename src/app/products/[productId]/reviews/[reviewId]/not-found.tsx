"use client"
import {usePathname} from 'next/navigation'
export default function NotFound(){
    const pathname = usePathname();
    const productId = pathname.split('/')[2];
    const reviewId = pathname.split('/')[4];
    return <h1>Review {reviewId} Not Found For Product {productId}</h1>;
}