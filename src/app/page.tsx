import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export default function HomePage (){
    return (
        <div className="flex flex-col justify-center items-center m-4">
            <h1 className="text-3xl my-3">Hey, time to sign in</h1>
            <LoginForm />
            <p className="my-3">Don&#39;t you have an account?</p>
            <Link href="/register" className="mx-2 underline">Register</Link>
        </div>
    )
}