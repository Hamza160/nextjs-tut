"use client"
import React from 'react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'

export default function ReactQueryProvider({children}: { children: React.ReactNode }) {
    const [queryClient] = React.useState<QueryClient>(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
}

