'use client'
import styles from './AuthWrapper.module.css'
import Image from "next/image";
import Diamond from '@/../public/static/Footer/Diamond.png'
import Star from '@/../public/static/Footer/BigStar.png'
import localFont from "next/font/local";
import clsx from "clsx";
import {useState} from "react";
import AccountBtn from "@/components/AccountBtn/AccountBtn";
import Login from "@/components/Login/Login";
import Register from "@/components/Register/Register";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {Manrope} from "next/font/google";
import {changeLogin} from "@/lib/defaultSlice/defaultSlice";

const daysOne = localFont({src: '../../Fonts/DaysOne-Regular.ttf'});
const manrope = Manrope({subsets: ["latin"], weight: ["500"]});

const AuthWrapper = () => {

    const isAuthOpen = useAppSelector(state => state.default.isAuthOpen)

    const dispatch = useAppDispatch();

    const [type, setType] = useState<'login' | 'register'>('login')
    return (
        isAuthOpen &&
        <div className={clsx(manrope.className, styles.login)} onClick={() => dispatch(changeLogin())}>
            <div className={styles.shadow}/>
            <div className={styles.login__wrapper} onClick={(event) => event.stopPropagation()}>
                <div className={styles.images}>
                    <Image src={Star} alt={'Star'} width={74} height={77} className={styles.star}/>
                    <Image src={Diamond} alt={'Diamond'} width={17.1} height={19.6} className={styles.diamond}/>
                </div>
                <h1 className={clsx(styles.title, daysOne.className)}>Играй <br/> и побеждай!</h1>
                {
                    type == 'login' ?
                        <Login/>
                        :
                        <Register toLogin={() => setType('login')}/>
                }
                <AccountBtn type={type} setType={() => setType(type === "login" ? 'register' : 'login')}/>
            </div>
        </div>
    );
};

export default AuthWrapper;