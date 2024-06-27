'use client'
import styles from './AuthWrapper.module.css'
import Image from "next/image";
import Diamond from '@/../public/Footer/Diamond.svg'
import Star from '@/../public/Footer/BigStar.svg'
import localFont from "next/font/local";
import clsx from "clsx";
import {ReactNode, useState} from "react";
import AccountBtn from "@/components/AccountBtn/AccountBtn";
import Login from "@/components/Login/Login";
import Register from "@/components/Register/Register";
import {useAppSelector} from "@/lib/hooks";

const daysOne = localFont({src: '../../Fonts/DaysOne-Regular.ttf'});

interface AuthWrapperProps {
    children: ReactNode
    type: 'login' | 'register'
}

const AuthWrapper = () => {

    const isAuthOpen = useAppSelector(state => state.default.isAuthOpen)
    console.log(isAuthOpen)

    const [type, setType] = useState<'login' | 'register'>('login')
    return (
        isAuthOpen ?
        <div className={styles.login}>
            <div className={styles.shadow}/>
            <div className={styles.login__wrapper} style={{height: type === 'login' ? '323px' : '350px'}}>
                <div className={styles.images}>
                    <Image src={Star} alt={'Star'} width={74} height={77} className={styles.star}/>
                    <Image src={Diamond} alt={'Diamond'} width={17.1} height={19.6} className={styles.diamond}/>
                </div>
                <h1 className={clsx(styles.title, daysOne.className)}>Играй <br/> и побеждай!</h1>
                {
                    type == 'login' ?
                    <Login />
                    :
                        <Register />
                }
                <AccountBtn type={type} setType={() => setType(type === "login" ? 'register' : 'login')}/>
            </div>
        </div>
            :
            <div style={{position: 'absolute'}}></div>
    );
};

export default AuthWrapper;