import React from 'react';

export default function MarketingLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <h1>MarketingLayout</h1>
            {children}
        </div>
    );
}

