import Link from "next/link";

export default function HomePage (){
    console.log("HomePage");
    return (
        <div>
           <h1>Home Page</h1>
            <Link href={"/products"}>Go to Products Page</Link>
        </div>
    )
}