'use client'
import styles from './BetCounter.module.css'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setBet} from "@/lib/crashSlice/crashSlice";
import PriceIcon from "@/components/PriceIcon/PriceIcon";
import Range from "@/components/ui/Range/Range";


const BetCounter = () => {
    const dispatch = useAppDispatch()
    const {bet} = useAppSelector(state => state.crash)

    const balance = useAppSelector(state => state.user.balance)

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

export default BetCounter;