"use client"
import {useRouter} from "next/navigation";
import {startTransition} from "react"; // lets you render a part of the UI in the background.

export default function ErrorBoundary({error, reset}: {error:Error, reset:() => void}) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    }

    return (
        <div>
            <h1>{error.message}</h1>
            <button onClick={reload}>try again</button>
        </div>
    )
}