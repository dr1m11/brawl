'use client'


import ProfileButton from "@/components/ProfileButton/ProfileButton";
import LoginButton from "@/components/LoginButton/LoginButton";

const MainProfile = () => {
    const isLoggedIn = !!localStorage.getItem('token')

    return isLoggedIn ?
        <ProfileButton />
        :
        <LoginButton />
};

export default MainProfile;