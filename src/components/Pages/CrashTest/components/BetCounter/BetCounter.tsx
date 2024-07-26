'use client'
import styles from './BetCounter.module.css'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setBet} from "@/lib/crashSlice/crashSlice";


const BetCounter = () => {
    const dispatch = useAppDispatch()
    const bet = useAppSelector(state => state.crash.bet)

    return (
        <div className={styles.current__bet}>
            <button className={styles.minus} onClick={() => {
                if (bet >= 10) {
                    dispatch(setBet(bet - 10))
                }
            }}>-</button>
            <form className={styles.form}>
                <input className={styles.sum__input} value={bet} onChange={(e) => dispatch(setBet(+(e.target.value.replace(/[^\d]/g,''))))}/>
                <label>RUB</label>
            </form>
            <button className={styles.plus} onClick={() => {
                dispatch(setBet(bet + 10))
            }}>+
            </button>
        </div>
    );
};

export default BetCounter;