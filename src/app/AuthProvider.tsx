'use client'
import {ReactNode, useEffect} from "react";
import {userService} from "@/services/user/user.service";
import {useAppDispatch} from "@/lib/hooks";
import {setUser} from "@/lib/userSlice/userSlice";
import {getAccessToken} from "@/services/auth/auth.helper";
import {useQuery} from "@tanstack/react-query";


const AuthProvider = ({children}: {children: ReactNode}) => {
    const dispatch = useAppDispatch()

    const {data, isSuccess, isLoading} = useQuery({
        queryKey: ['user'],
        queryFn: () => userService.getUserById(),
        enabled: !!getAccessToken()
    })

    useEffect(() => {
        if (getAccessToken() === null) {
            localStorage.clear()
        } else if (isSuccess) {
            dispatch(setUser(data))
        }
    }, [isLoading, data, isSuccess, dispatch])

    return children
};

export default AuthProvider;