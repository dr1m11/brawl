'use client'
import OrangeButton from "@/components/ui/OrangeButton/OrangeButton"
import {useAppDispatch, useAppSelector} from "@/lib/hooks"
import {setIsCheckModalOpen} from "@/lib/paymentSlice/payment.slice";


const PayButton = () => {
    const dispatch = useAppDispatch()

    const {value} = useAppSelector(state => state.payment)

    return (
        <OrangeButton
            onClick={() => dispatch(setIsCheckModalOpen(true))}
            disabled={!value || +value < 200}
            margin={44}
        >
            Я оплатил
        </OrangeButton>
    );
};

export default PayButton;