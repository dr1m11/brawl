'use client'
import styles from './BetTips.module.css'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setBet} from "@/lib/crashSlice/crashSlice";

const BetTips = () => {
    const dispatch = useAppDispatch()
    const bet = useAppSelector(state => state.crash.bet)

    return (
        <div className={styles.bet__tips}>
            <span className={styles.tip__sums} onClick={() => dispatch(setBet(bet + 50))}>+50</span>
            <span className={styles.tip__sums} onClick={() => dispatch(setBet(bet + 100))}>+100</span>
            <span className={styles.tip__sums} onClick={() => dispatch(setBet(bet + 200))}>+200</span>
            <span className={styles.tip__sums} onClick={() => dispatch(setBet(bet + 500))}>+500</span>
            <span className={styles.tip__sums} onClick={() => dispatch(setBet(bet + 1000))}>+1000</span>
        </div>
    );
};

export default BetTips;