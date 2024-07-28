import styles from './WithdrawMethods.module.css'
import WithdrawCard from "@/components/Pages/Withdraw/components/WithdrawCard/WithdrawCard";
import GemsCard from "@/components/Pages/Withdraw/components/GemsCard/GemsCard";
const WithdrawMethods = () => {
    return (
        <div className={styles.payment__info}>
            <div className={styles.payment__methods}>
                <WithdrawCard/>
            </div>
            <div className={styles.gems}>
                <GemsCard value={30} />
                <GemsCard value={80} />
                <GemsCard value={170} />
                <GemsCard value={360} />
                <GemsCard value={950} />
                <GemsCard value={2000} />
            </div>
        </div>
    );
};

export default WithdrawMethods;