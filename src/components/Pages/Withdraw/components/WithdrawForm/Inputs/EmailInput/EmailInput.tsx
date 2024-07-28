'use client'
import styles from '../Inputs.module.css'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setEmailValue, setIsValidEmail} from "@/lib/withdrawSlice/withdraw.slice";

interface EmailInputProps {
    placeholder: string,
}

const EmailInput = ({placeholder}: EmailInputProps) => {
    const {emailValue, isEmailSend} = useAppSelector(state => state.withdraw)

    const dispatch = useAppDispatch()

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue} = e.target;
        dispatch(setEmailValue(inputValue))
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        dispatch(setIsValidEmail(emailRegex.test(inputValue)))
    };

    return (
            <input
                placeholder={placeholder}
                className={styles.payment__input}
                value={emailValue}
                onChange={handleChangeEmail}
                disabled={isEmailSend}
            />
    );
};

export default EmailInput;