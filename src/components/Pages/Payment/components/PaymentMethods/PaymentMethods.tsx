import styles from './PaymentMethods.module.css'
import PaymentCard from "@/components/Pages/Payment/components/PaymentCard/PaymentCard";
import SBP from '@/../public/Payment/SBP.png'
import Card from '@/../public/Payment/Card.png'
const PaymentMethods = () => {
    return (
        <div className={styles.payment__methods}>
            <PaymentCard image={SBP} data={{id: 44, title: 'СБП'}}/>
            <PaymentCard image={Card} data={{id: 36, title: 'Карта'}}/>
        </div>
    );
};

export default PaymentMethods;