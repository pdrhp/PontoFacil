'use client';

import React from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

interface ReactQueryClientProviderProps {
    children: React.ReactNode;
}

const queryClient = new QueryClient();

const ReactQueryClientProvider: React.FC<ReactQueryClientProviderProps> = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default ReactQueryClientProvider;