'use client'
import styles from './BetCounter.module.css'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import Range from "@/components/ui/Range/Range";
import {memo} from "react";
import {setBet} from "@/lib/crashSlice/crashSlice";

const BetCounter = () => {
    const balance = useAppSelector(state => state.user.balance)

    const dispatch = useAppDispatch()

    const bet = useAppSelector(state => state.crash.bet)

    return (
        <div className={styles.range}>
            <Range
                step={balance / 1000}
                max={balance}
                value={bet}
                min={0}
                onChange={(e) => dispatch(setBet(+(e.target.value.replace(/[^\d]/g,''))))}
            />
        </div>
    );
};

export default memo(BetCounter);