"use client"
import React from 'react';

const Likes = () => {
    const [count, setCount] = React.useState(0);
    if (typeof localStorage !== 'undefined') {
        console.log(localStorage);
    }
    return (
        <div onClick={() => setCount(prevCount => prevCount + 1)}>
            <p>{count} Likes {typeof console.log('running on server')}</p>
        </div>
    );
}

export default Likes;
