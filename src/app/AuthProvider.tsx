'use client'
import {ReactNode, useEffect} from "react";
import {userService} from "@/services/user/user.service";
import {useAppDispatch} from "@/lib/hooks";
import {setBalance, setId, setNickname} from "@/lib/userSlice/userSlice";
import {getAccessToken} from "@/services/auth/auth.helper";
import {useQuery} from "@tanstack/react-query";

const AuthProvider = ({children}: {children: ReactNode}) => {
    const dispatch = useAppDispatch()

    const {data, isSuccess} = useQuery({
        queryKey: ['user'],
        queryFn: () => userService.getUserById(),
    })

    useEffect(() => {
        if (getAccessToken() === null) {
            localStorage.clear()
        } else if (isSuccess) {
            dispatch(setBalance(data.balance))
            dispatch(setNickname(data.username))
            dispatch(setId(localStorage.getItem('userId')))
        }
    }, [data])

    return children
};

export default AuthProvider;