'use client'
import styles from './Automation.module.css'
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setIsAutoBet} from "@/lib/crashSlice/crashSlice";
const Automation = () => {
    const {isAutoBet, bet} = useAppSelector(state => state.crash)
    const dispatch = useAppDispatch()
    const [activeWithdraw, setActiveWithdraw] = useState(false)
    const [multiplier, setMultiplier] = useState(1)
    return (
        <div className={styles.automation}>
            <div className={styles.auto}>
                <div className={styles.auto__button} onClick={() => dispatch(setIsAutoBet(!isAutoBet))}>
                    {(isAutoBet && !!bet) && <div className={styles.auto__button__active}/>}
                </div>
                <span className={styles.auto__label}>Автоставка</span>
            </div>
            <div className={styles.auto}>
                <div className={styles.auto__button} onClick={() => setActiveWithdraw(!activeWithdraw)}>
                    {activeWithdraw && <div className={styles.auto__button__active}/>}
                </div>
                <span className={styles.auto__label}>Автовывод</span>
            </div>
            <form className={styles.auto__multiplier}>
                <label className={styles.auto__multiplier__label}>x</label>
                <input className={styles.input} type={'number'} value={multiplier} onChange={(event) => setMultiplier(+event.target.value)}/>
            </form>
        </div>
    );
};

export default Automation;