import styles from './WithdrawInfo.module.css';
import Value from "@/components/Pages/Withdraw/components/WithdrawInfo/Value";
import PaymentValue from "@/components/Pages/Withdraw/components/WithdrawInfo/PaymentValue";

const WithdrawInfo = () => {
    return (
        <>
            <div className={styles.info}>
                <h3 className={styles.info__label}>Сумма вывода</h3>
                <Value/>
            </div>
            <div className={styles.info}>
                <h3 className={styles.info__label}>Итого к оплате</h3>
                <PaymentValue />
            </div>
        </>
    );
};

export default WithdrawInfo;