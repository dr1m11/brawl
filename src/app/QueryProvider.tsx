'use client'

import {PropsWithChildren, useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryStreamedHydration} from "@tanstack/react-query-next-experimental";

export function QueryProvider({children}: PropsWithChildren) {
    const [client] = useState(new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 10
            }
        }
    }))

    return (
        <QueryClientProvider client={client}>
            <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
        </QueryClientProvider>
    )
}