import React from 'react';

const Views = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return (
        <div>
            <p>10k Views</p>
        </div>
    );
}

export default Views;
