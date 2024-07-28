import styles from '../Containers.module.css'
import FormInput from "@/components/Pages/Payment/components/PaymentForm/FormInput/FormInput";
import CodeInput from "@/components/Pages/Withdraw/components/WithdrawForm/Inputs/CodeInput/CodeInput";

interface CodeInputContainerProps {
    label: string
    placeholder: string
}

const CodeInputContainer = ({label, placeholder }: CodeInputContainerProps) => {
    return (
        <div className={styles.input__container}>
            <label className={styles.input__label}>{label}</label>
            <CodeInput placeholder={placeholder}/>
        </div>
    );
};

export default CodeInputContainer;