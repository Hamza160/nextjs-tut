import {notFound} from "next/navigation";

export default async function ReviewDetailPage({params}:{
    params:Promise<{
        productId:string;
        reviewId:string;
    }>
}) {
    const {productId, reviewId} = await params;

    if(parseInt(reviewId ) > 1000){
        notFound();
    }

    return (
        <h1>Review For Product {productId} and Details for Review {reviewId}</h1>
    )
}