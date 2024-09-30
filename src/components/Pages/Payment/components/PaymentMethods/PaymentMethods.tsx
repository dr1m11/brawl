import styles from './PaymentMethods.module.css'
import {Card} from "@/components/ui/Card/Card";
const PaymentMethods = () => {
    return (
        <div className={styles.payment__methods}>
            <Card />
        </div>
    );
};

export default PaymentMethods;