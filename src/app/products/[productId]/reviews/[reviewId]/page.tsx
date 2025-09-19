import {redirect} from "next/navigation";

const generateRandomInt = (count: number) => {
    return Math.floor(Math.random() * count);
}
export default async function ReviewDetailPage({params}:{
    params:Promise<{
        productId:string;
        reviewId:string;
    }>
}) {
    const {productId, reviewId} = await params;
    // const random = generateRandomInt(2);
    // if(random === 1){
    //     throw new Error("Error loading review")
    // }


    if(parseInt(reviewId) > 1000){
        redirect('/');
    }

    return (
        <h1>Review For Product {productId} and Details for Review {reviewId}</h1>
    )
}