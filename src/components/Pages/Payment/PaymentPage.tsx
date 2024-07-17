'use client'
import styles from './PaymentPage.module.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import {Manrope} from "next/font/google";

const manrope = Manrope({weight: ['400', '500', '600'], subsets: ['latin']})

const PaymentPage = () => {
    const [value, setValue] = useState(0)
    const [user, setUser] = useState('')
    const router = useRouter()
    useEffect(() => {
        setUser(localStorage.getItem('userId'))
    }, []);
    return (
        <div className={styles.root}>
            <div className={styles.controls}>
                <input className={styles.input} onChange={(e) => setValue(+e.target.value)}/>
                <button onClick={async () => {
                    const response = await axios.post('https://api.youngrusssia.ru/replenishment', JSON.stringify({
                        user_id: user,
                        amount: value
                    }))
                    const url = response.data
                    router.push(url)
                }}>Пополнить</button>
            </div>
        </div>
        // <div className={styles.root}>
        //     <div className={styles.wrapper}>
        //         <div className={styles.header}>
        //             <Link href={'/profile'}>
        //                 <button className={clsx(styles.back__btn, manrope.className)}>Назад</button>
        //             </Link>
        //             <span className={styles.header__label}>Пополните баланс</span>
        //         </div>
        //     </div>
        // </div>
    );
};

export default PaymentPage;