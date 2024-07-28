import styles from '../Containers.module.css'
import EmailInput from "@/components/Pages/Withdraw/components/WithdrawForm/Inputs/EmailInput/EmailInput";

interface InputContainerProps {
    label: string
    placeholder: string
}

const EmailInputContainer = ({label, placeholder}: InputContainerProps) => {
    return (
        <div className={styles.input__container}>
            <label className={styles.input__label}>{label}</label>
            <EmailInput placeholder={placeholder}/>
        </div>
    );
};

export default EmailInputContainer;