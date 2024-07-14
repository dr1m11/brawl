'use client'
import styles from './ProfileButton.module.css'
import Image from "next/image";
import Avatar from "@/../public/Header/Avatar.svg"
import Link from "next/link";
import {useMutation, useQuery} from "@tanstack/react-query";
import {ISignInData} from "@/services/auth/auth.types";
import {authService} from "@/services/auth/auth.service";
import {saveTokenStorage} from "@/services/auth/auth.helper";
import {userService} from "@/services/user/user.service";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";

const ProfileButton = () => {
    const {nickname, balance} = useAppSelector(state => state.user)

    return (
        <Link href={'/profile'} className={styles.root}>
            <h2 className={styles.nickname}>{nickname}</h2>
            <div className={styles.balance}>
                <h5 className={styles.numbers}>{balance}</h5>
                <h5 className={styles.value}>RUB</h5>
            </div>
            <Image src={Avatar} alt={'Avatar'} width={42} height={42}/>
        </Link>
    );
};

export default ProfileButton;