import styles from './WithdrawInfo.module.css';
import Value from "@/components/Pages/Withdraw/components/WithdrawInfo/Value";

const WithdrawInfo = () => {
    return (
        <div className={styles.info}>
            <h3 className={styles.info__label}>Сумма вывода</h3>
            <Value />
        </div>
    );
};

export default WithdrawInfo;