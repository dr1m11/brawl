'use client'
import styles from './WithdrawForm.module.css';
import CodeInputContainer from "@/components/Pages/Withdraw/components/WithdrawForm/Containers/CodeInputContainer/CodeInputContainer";
import EmailInputContainer from "@/components/Pages/Withdraw/components/WithdrawForm/Containers/EmailInputContainer/EmailInputContainer";
import {useAppSelector} from "@/lib/hooks";
import clsx from "clsx";

const WithdrawForm = () => {
    const {isEmailSend, error, field} = useAppSelector(state => state.withdraw)
    return (
        <form className={styles.form}>
            <div className={styles.inputs}>
                <EmailInputContainer label={'Введите email привязанный к Supercell ID'} placeholder={"example@example.com"}/>
                {isEmailSend && <CodeInputContainer label={'Введите код подтверждения'} placeholder={'123456'} />}
            </div>
            { (isEmailSend || !!error) &&
                <div className={clsx(styles.success, !!error && styles.error)}>
                    {error || field}
                </div>
            }
        </form>
    );
};

export default WithdrawForm;