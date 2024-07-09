'use client'
import styles from './PaymentPage.module.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";
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
    );
};

export default PaymentPage;