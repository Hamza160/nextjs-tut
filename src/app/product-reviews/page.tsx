import Product from "@/components/Product";
import Reviews from "@/components/Reviews";
import {Suspense} from "react";

export default function ProductReviewPage() {
    return (
        <div>
            <h1>Product Reviews</h1>
            <Suspense fallback={<div>Loading Product Details...</div>}>
                <Product/>
            </Suspense>
            <Suspense fallback={<div>Loading Reviews...</div>}>
                <Reviews/>
            </Suspense>
        </div>
    )
}