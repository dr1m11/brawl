'use client'
import styles from './ProfileData.module.css'
import localFont from "next/font/local";
import clsx from "clsx";
import Wallet from '@/../public/Profile/Wallet.svg'
import Image from "next/image";
import UserIcon from "../../../public/Profile/UserIcon.svg";
import {useQuery} from "@tanstack/react-query";
import {userService} from "@/services/user/user.service";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {useEffect} from "react";
import Link from "next/link";

const daysOne = localFont({src: '../../Fonts/DaysOne-Regular.ttf'});

const ProfileData = () => {
    const {username, balance, photo} = useAppSelector(state => state.user)

    return (
        <div className={styles.header__left}>
            {photo && <Image src={photo} alt={'Avatar'} width={111} height={111} className={styles.user__icon}/>}
            <div className={styles.header__left__content}>
                <h2 className={clsx(daysOne.className, styles.username)}>{username}</h2>
                <div className={styles.header__left__buttons}>
                    <Link href={'/payment'} className={styles.wallet}><Image src={Wallet} alt={'Wallet'} width={18}
                                                             height={18}/></Link>
                    <button className={styles.balance}>{balance} RUB</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileData;