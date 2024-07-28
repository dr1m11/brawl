import styles from './PaymentForm.module.css';
import InputContainer from "@/components/Pages/Payment/components/PaymentForm/InputContainer/InputContainer";

const PaymentForm = () => {
    return (
        <form className={styles.form}>
            <InputContainer label={'Введите сумму RUB'} placeholder={"0.00 RUB"} type={'SUM'}/>
            <InputContainer label={'Введите промокод'} placeholder={"PROMO"} type={'PROMO'}/>
        </form>
    );
};

export default PaymentForm;