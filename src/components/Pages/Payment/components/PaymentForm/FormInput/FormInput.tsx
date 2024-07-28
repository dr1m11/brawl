'use client'
import styles from './FormInput.module.css'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setValue} from "@/lib/paymentSlice/payment.slice";

interface FormInputProps {
    placeholder: string,
    type: 'SUM' | 'PROMO'
}

const FormInput = ({placeholder, type}: FormInputProps) => {
    const value = useAppSelector(state => state.payment.value)

    const dispatch = useAppDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue} = e.target;
        const numericValue = inputValue.replace(/[^0-9.,]/g, ''); // allow decimal points and commas
        const decimalParts = numericValue.split(/[.,]/);
        if (decimalParts.length > 1) {
            decimalParts[1] = decimalParts[1].slice(0, 2); // truncate to 2 digits
        }
        const newValue = decimalParts.join('.');
        dispatch(setValue(newValue))
    };

    return (
        type === 'SUM' ?
            <input placeholder={placeholder} className={styles.payment__input} value={value}
                   onChange={handleChange}/>
            :
            <input placeholder={placeholder} className={styles.payment__input}/>
    );
};

export default FormInput;