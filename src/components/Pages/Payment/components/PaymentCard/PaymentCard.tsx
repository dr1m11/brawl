'use client'
import styles from './PaymentCard.module.css'
import clsx from "clsx";
import Image from "next/image";
import FreeKassa from '@/../public/Payment/FreeKassa.png'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setIsPaymentSelected} from "@/lib/paymentSlice/payment.slice";
const PaymentCard = () => {
    const isPaymentSelected = useAppSelector(state => state.payment.isPaymentSelected)

    const dispatch = useAppDispatch()

    return (
        <div className={clsx(styles.payment__card, isPaymentSelected && styles.selected)}
             onClick={() => dispatch(setIsPaymentSelected(!isPaymentSelected))}>
            <Image src={FreeKassa} alt={'FreeKassa'} quality={100} width={73} height={73}/>
        </div>
    );
};

export default PaymentCard;