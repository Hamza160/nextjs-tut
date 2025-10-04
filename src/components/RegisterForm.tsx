// RegisterForm.tsx (client)
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { doCredentialsLogin } from "@/app/actions";
import SocialLogin from "@/components/SocialLogin";

export default function RegisterForm() {
    const [err, setErr] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try{
            const formData = new FormData(event.currentTarget);
            const name = formData.get("name");
            const email = formData.get("email");
            const password = formData.get("password");

            const response = await fetch("/api/register", {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, email, password}),
            })

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            response.status === 201 && router.push("/");

        }catch(e){
            console.error(e);
        }

    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center p-5 gap-3 w-full mb-3 border border-gray-200">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" className="border mx-2 border-gray-500 rounded" />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" className="border mx-2 border-gray-500 rounded" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="border mx-2 border-gray-500 rounded" />
                </div>
                {err && <p className="text-red-600 text-sm mt-2">{err}</p>}
                <button type="submit" className="bg-orange-300 mt-4 rounded flex justify-center items-center w-36">Register</button>
            </form>
            <SocialLogin />
        </div>
    );
}
