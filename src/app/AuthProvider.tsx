'use client'
import {ReactNode, useEffect} from "react";
import {getAccessToken} from "@/services/auth/auth.helper";

const AuthProvider = ({children}: {children: ReactNode}) => {

    useEffect(() => {
        if (getAccessToken() === null) {
            localStorage.clear()
        }
    })

    return (
        <div>
            {children}
        </div>
    );
};

export default AuthProvider;