// LoginForm.tsx (client)
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { doCredentialsLogin } from "@/app/actions";
import SocialLogin from "@/components/SocialLogin";

export default function LoginForm() {
    const [err, setErr] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErr(null);

        const formData = new FormData(event.currentTarget);
        const res = await doCredentialsLogin(formData);

        if (res?.error) {
            setErr(res.error); // show it near the form
            return;
        }
        router.push("/home");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center p-5 gap-3 w-full mb-3 border border-gray-200">
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" className="border mx-2 border-gray-500 rounded" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="border mx-2 border-gray-500 rounded" />
                </div>
                {err && <p className="text-red-600 text-sm mt-2">{err}</p>}
                <button type="submit" className="bg-orange-300 mt-4 rounded flex justify-center items-center w-36">Login</button>
            </form>
            <SocialLogin />
        </div>
    );
}
