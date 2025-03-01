'use client'
import styles from './BetTips.module.css'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setBet} from "@/lib/crashSlice/crashSlice";
import clsx from "clsx";

const bets = [50, 100, 200, 500, 1000]

const BetTips = () => {
    const dispatch = useAppDispatch()
    const {bet, socketEvent: {status}, isBetSet} = useAppSelector(state => state.crash)

    const isDisabled = (status !== 'Pending') || isBetSet

    const handleBetClick = (betCount: number) => {
        if (!isDisabled) {
            dispatch(setBet(bet + betCount))
        }
    }

    return (
        <div className={styles.bet__tips}>
            {bets.map(item => (
                <span
                    key={item}
                    className={clsx(styles.tip__sums, {
                        [styles.disabled]: isDisabled,
                    })}
                    onClick={() => handleBetClick(item)}
                >
                    +{item}
                </span>
            ))}
        </div>
    );
};

export default BetTips;