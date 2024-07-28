'use client'
import styles from './Range.module.css'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setBet} from "@/lib/wheelSlice/wheelSlice";

const Range = () => {
    const bet = useAppSelector(state => state.wheel.bet)
    const balance = useAppSelector(state => state.user.balance)

    const dispatch = useAppDispatch()

    return (
        <div className={styles.range__container}>
            <input type={'range'} min={"0"} max={balance} step={+balance / 1000} value={bet} onChange={event => dispatch(setBet(event.target.value))}
                   className={styles.range}/>
        </div>
    );
};

export default Range;