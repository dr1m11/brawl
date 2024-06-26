'use client'
import ProfileButton from "@/components/ProfileButton/ProfileButton";
import LoginButton from "@/components/LoginButton/LoginButton";
import {getAccessToken} from "@/services/auth/auth.helper";
import {useEffect, useState} from "react";

const MainProfile = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        if (!!getAccessToken())
            setIsLoggedIn(true)
        setIsLoading(false)
    }, []);

    return isLoading ? <div /> : isLoggedIn ?
        <ProfileButton />
        :
        <LoginButton />
};

export default MainProfile;