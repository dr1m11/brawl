import styles from './InputContainer.module.css'
import FormInput from "@/components/Pages/Payment/components/PaymentForm/FormInput/FormInput";

interface InputContainerProps {
    label: string
    placeholder: string
    type: 'SUM' | 'PROMO'
    note?: string
}

const InputContainer = ({label, placeholder, type, note}: InputContainerProps) => {

    return (
        <div className={styles.input__container} style={{maxHeight: !!note && '74px'}}>
            <label className={styles.input__label}>{label}</label>
            <FormInput placeholder={placeholder} type={type}/>
            {!!note && <span className={styles.note}>{note}</span>}
        </div>
    );
};

export default InputContainer;