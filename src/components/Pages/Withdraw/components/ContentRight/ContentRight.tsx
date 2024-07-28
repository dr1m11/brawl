import styles from './ContentRight.module.css'
import SelectedMethod from "@/components/Pages/Payment/components/SelectedMethod/SelectedMethod";
import WithdrawForm from "@/components/Pages/Withdraw/components/WithdrawForm/WithdrawForm";
import WithdrawInfo from "@/components/Pages/Withdraw/components/WithdrawInfo/WithdrawInfo";
import WithdrawButton from "@/components/Pages/Withdraw/components/WithdrawButton/WithdrawButton";

const ContentRight = () => {
    return (
        <div className={styles.content__right}>
            <SelectedMethod />
            <WithdrawForm />
            <WithdrawInfo />
            <WithdrawButton />
        </div>
    );
};

export default ContentRight;