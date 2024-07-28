import styles from './ContentRight.module.css'
import PayButton from "@/components/Pages/Payment/components/PayButton/PayButton";
import PaymentInfo from "@/components/Pages/Payment/components/PaymentInfo/PaymentInfo";
import PaymentForm from "@/components/Pages/Payment/components/PaymentForm/PaymentForm";
import SelectedMethod from "@/components/Pages/Payment/components/SelectedMethod/SelectedMethod";

const ContentRight = () => {
    return (
        <div className={styles.content__right}>
            <SelectedMethod />
            <PaymentForm />
            <PaymentInfo />
            <PayButton />
        </div>
    );
};

export default ContentRight;