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
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                step={+balance / 1000}
                max={balance || 0}
                value={bet}
                min={'0'}
                onChange={(event) => dispatch(setBet(event.target.value))}
            />
        </div>
    );
};

export default memo(BetCounter);