'use client'

import {PropsWithChildren, useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryStreamedHydration} from "@tanstack/react-query-next-experimental";

export function QueryProvider({children}: PropsWithChildren) {
    const [client] = useState(new QueryClient())

    return (
        <QueryClientProvider client={client}>
            <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
        </QueryClientProvider>
    )
}