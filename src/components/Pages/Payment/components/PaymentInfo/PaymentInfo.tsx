import styles from './PaymentInfo.module.css';
import Value from "@/components/Pages/Payment/components/PaymentInfo/Value";

const PaymentInfo = () => {
    return (
        <div className={styles.info}>
            <h3 className={styles.info__label}>Сумма зачисления</h3>
            <Value />
        </div>
    );
};

export default PaymentInfo;