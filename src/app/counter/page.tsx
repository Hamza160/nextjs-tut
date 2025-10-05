"use client"
import React, {useEffect} from 'react';
import {useCounterStore} from "@/utils/store";

const logCount = () => {
    const count = useCounterStore.getState().count;
    useCounterStore.setState({count:10});
    console.log("count", count)
}

export default function CounterPage() {
    const count = useCounterStore(state => state.count)
    const increment = useCounterStore(state => state.increment)
    const incrementAsync = useCounterStore(state => state.incrementAsync)
    const decrement = useCounterStore(state => state.decrement)

    useEffect(() => {
        logCount();
    }, [count])

    return (
        <div>
            <h1>Hello world this is count {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={incrementAsync}>Increment Async</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

