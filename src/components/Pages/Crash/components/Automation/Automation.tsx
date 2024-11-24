'use client'
import styles from './Automation.module.css'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setIsAutoBet, setIsAutoWithdraw} from "@/lib/crashSlice/crashSlice";

interface AutomationInterface {
    multiplier: string
    setMultiplier: (multiplier: string) => void
}

const Automation = ({multiplier, setMultiplier}: AutomationInterface) => {
    const {isAutoBet, bet, isAutoWithdraw} = useAppSelector(state => state.crash)
    const dispatch = useAppDispatch()

    const handleChangeSum = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue} = e.target;
        const numericValue = inputValue.replace(/[^0-9.,]/g, ''); // allow decimal points and commas
        const decimalParts = numericValue.split(/[.,]/);
        if (decimalParts.length > 1) {
            decimalParts[1] = decimalParts[1].slice(0, 2); // truncate to 2 digits
        }
        const newValue = decimalParts.join('.');
        setMultiplier(newValue)
    };

    return (
        <div className={styles.automation}>
            <div className={styles.auto}>
                <div className={styles.auto__button} onClick={() => dispatch(setIsAutoBet(!isAutoBet))}>
                    {(isAutoBet && !!bet) && <div className={styles.auto__button__active}/>}
                </div>
                <span className={styles.auto__label}>Автоставка</span>
            </div>
            <div className={styles.auto}>
                <div className={styles.auto__button} onClick={() => dispatch(setIsAutoWithdraw(!isAutoWithdraw))}>
                    {isAutoWithdraw && <div className={styles.auto__button__active}/>}
                </div>
                <span className={styles.auto__label}>Автовывод</span>
            </div>
            <form className={styles.auto__multiplier}>
                <label className={styles.auto__multiplier__label}>x</label>
                <input className={styles.input} type={'number'} value={multiplier} onChange={handleChangeSum}/>
            </form>
        </div>
    );
};

export default Automation;