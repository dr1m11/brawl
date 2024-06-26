'use client'
import styles from './ProfileData.module.css'
import localFont from "next/font/local";
import clsx from "clsx";
import Wallet from '@/../public/Profile/Wallet.svg'
import Image from "next/image";
import UserIcon from "../../../public/Profile/UserIcon.svg";
import {useQuery} from "@tanstack/react-query";
import {userService} from "@/services/user/user.service";
import {useAppDispatch} from "@/lib/hooks";
import {useEffect} from "react";

const daysOne = localFont({src: '../../Fonts/DaysOne-Regular.ttf'});

const ProfileData = () => {
    const {data, isSuccess, isPending, isError, error} = useQuery({
        queryKey: ['getUser'],
        queryFn: userService.getUserById
    })

    return (
        <div className={styles.header__left}>
            <Image src={UserIcon} alt={'Avatar'} width={111} height={111} className={styles.user__icon}/>
            <div className={styles.header__left__content}>
                <h2 className={clsx(daysOne.className, styles.username)}>{isSuccess && data.username}</h2>
                <div className={styles.header__left__buttons}>
                    <button className={styles.wallet}><Image src={Wallet} alt={'Wallet'} width={18}
                                                             height={18}/></button>
                    <button className={styles.balance}>{isSuccess && data.balance} RUB</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileData;