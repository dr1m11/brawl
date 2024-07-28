import styles from './PaymentMethods.module.css'
import PaymentCard from "@/components/Pages/Payment/components/PaymentCard/PaymentCard";
const PaymentMethods = () => {
    return (
        <div className={styles.payment__methods}>
            <PaymentCard />
        </div>
    );
};

export default PaymentMethods;