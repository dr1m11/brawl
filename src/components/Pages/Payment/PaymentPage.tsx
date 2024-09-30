import styles from './PaymentPage.module.css'
import clsx from "clsx";
import {Manrope} from "next/font/google";
import PaymentHeader from "@/components/Pages/components/Payment/PaymentHeader/PaymentHeader";
import Content from "@/components/Pages/Payment/components/Content/Content";
import {CheckPaymentModal} from "@/components/Pages/Payment/modals/CheckPaymentModal/CheckPaymentModal";


const manrope = Manrope({weight: ['400', '500', '600'], subsets: ['latin']})

const PaymentPage = () => {
    return (
        <>
            <div className={clsx(styles.root, manrope.className)}>
                <div className={styles.wrapper}>
                    <PaymentHeader label={'Пополните баланс'}/>
                    <Content/>
                </div>
            </div>
            <CheckPaymentModal />
        </>
    );
};

export default PaymentPage;