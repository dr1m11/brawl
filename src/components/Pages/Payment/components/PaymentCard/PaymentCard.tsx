'use client'
import styles from './PaymentCard.module.css'
import clsx from "clsx";
import Image, {StaticImageData} from "next/image";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setSelectedMethod} from "@/lib/paymentSlice/payment.slice";

interface IPaymentCardProps {
    image: StaticImageData
    data: {
        title: string
        id: number
    }
}

const PaymentCard = ({image, data}: IPaymentCardProps) => {
    const selectedMethod = useAppSelector(state => state.payment.selectedMethod)

    const dispatch = useAppDispatch()

    return (
        <div className={clsx(styles.payment__card, selectedMethod?.title === data.title && styles.selected)}
             onClick={() => dispatch(setSelectedMethod(data))}>
            <Image src={image} alt={data.title} quality={100} width={73} height={73}/>
        </div>
    );
};

export default PaymentCard;