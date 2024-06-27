'use client'
import styles from './LoginButton.module.css'
import {Days_One} from "next/font/google";
import clsx from "clsx";
import {useAppDispatch, useAppSelector, useAppStore} from "@/lib/hooks";
import {changeLogin} from "@/lib/defaultSlice/defaultSlice";


const daysOne = Days_One({subsets: ["latin"], weight: ["400"]});


const LoginButton = () => {
    const dispatch = useAppDispatch()
    return (
            <button className={clsx(styles.button, daysOne)} onClick={() => dispatch(changeLogin())}>
                    ВОЙТИ
            </button>
    );
};

export default LoginButton;