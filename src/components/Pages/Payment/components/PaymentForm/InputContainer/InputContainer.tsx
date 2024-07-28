import styles from './InputContainer.module.css'
import FormInput from "@/components/Pages/Payment/components/PaymentForm/FormInput/FormInput";

interface InputContainerProps {
    label: string
    placeholder: string
    type: 'SUM' | 'PROMO'
}

const InputContainer = ({label, placeholder, type}: InputContainerProps) => {

    return (
        <div className={styles.input__container}>
            <label className={styles.input__label}>{label}</label>
            <FormInput placeholder={placeholder} type={type}/>
        </div>
    );
};

export default InputContainer;