'use client'
import styles from '../Inputs.module.css'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setCode, setEmailValue, setIsValidEmail} from "@/lib/withdrawSlice/withdraw.slice";

interface CodeInputProps {
    placeholder: string,
}

const CodeInput = ({placeholder}: CodeInputProps) => {
    const value = useAppSelector(state => state.withdraw.code)

    const dispatch = useAppDispatch()

    const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue} = e.target;
        const numericValue = inputValue.replace(/[^0-9.,]/g, ''); // allow decimal points and commas
        const decimalParts = numericValue.split(/[.,]/);
        if (decimalParts.length > 1) {
            decimalParts[1] = decimalParts[1].slice(0, 2); // truncate to 2 digits
        }
        const newValue = decimalParts.join('.');
        if (newValue.length <= 6) {
            dispatch(setCode(newValue))
        }
    };

    return (
            <input placeholder={placeholder} className={styles.payment__input} onChange={handleChangeCode} value={value}/>
    );
};

export default CodeInput;