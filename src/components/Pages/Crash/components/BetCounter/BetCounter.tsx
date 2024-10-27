'use client'
import styles from './BetCounter.module.css'
import {useAppSelector} from "@/lib/hooks";
import Range from "@/components/ui/Range/Range";
import {memo} from "react";

interface BetCounterProps {
    bet: number
    setBet: (bet: number) => void
}

const BetCounter = ({bet, setBet}: BetCounterProps) => {
    const balance = useAppSelector(state => state.user.balance)

    return (
        <div className={styles.range}>
            <Range
                step={balance / 1000}
                max={balance}
                value={bet}
                min={0}
                onChange={(e) => setBet(+(e.target.value.replace(/[^\d]/g,'')))}
            />
        </div>
    );
};

export default memo(BetCounter);