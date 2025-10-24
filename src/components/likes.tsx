import React from 'react';

const Likes = async() => {
    await new Promise(resolve => setTimeout(resolve, 6000));

    return (
        <div>
            <p>10k Likes</p>
        </div>
    );
}

export default Likes;
