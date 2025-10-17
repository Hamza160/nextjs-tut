import React from 'react';

export default function ApplicationLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <h1>ApplicationLayout</h1>
        {children}
    </div>
  );
}

