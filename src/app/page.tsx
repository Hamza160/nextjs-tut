import Link from "next/link";
import Child from "@/app/Child";
import MyServerComponent from "@/app/MyServerComponent";

export default function HomePage (){
    console.log("HomePage");
    return (
        <div>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/about">About Page</Link>
            <h1>Hello From Home Page</h1>
            {/*/!* Component Composition *!/*/}
            {/*<Child>*/}
            {/*    <MyServerComponent />*/}
            {/*</Child>*/}

            <Child/>
        </div>
    )
}