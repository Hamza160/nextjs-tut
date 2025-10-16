import React from 'react';

export default function ServicesLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <h1>Services Header</h1>
        {children}
    </div>
  );
}

