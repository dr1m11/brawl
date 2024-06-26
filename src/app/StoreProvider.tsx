'use client'
import {useEffect, useRef} from 'react'
import {Provider} from 'react-redux'
import {makeStore, AppStore} from '@/lib/store'
import {setupListeners} from "@reduxjs/toolkit/query";
import {getAccessToken, removeFromStorage} from "@/services/auth/auth.helper";

export default function StoreProvider({
                                          children,
                                      }: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore | null>(null)
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
    }

    useEffect(() => {
        if (!getAccessToken()) {
            localStorage.clear()
            removeFromStorage()
        }

        if (storeRef.current != null) {
            const unsubscribe = setupListeners(storeRef.current.dispatch);
            return unsubscribe;
        }
    }, []);

    return <Provider store={storeRef.current}>{children}</Provider>
}