import type { Metadata } from 'next';
import Counter from "@/app/counter/Counter";

export const metadata: Metadata = {
    title:'Counter'
}
export default function CounterPage() {

    return (
        <div>
            <Counter/>
        </div>
    )
}