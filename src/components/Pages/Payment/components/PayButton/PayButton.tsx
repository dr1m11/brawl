'use client'
import OrangeButton from "@/components/ui/OrangeButton/OrangeButton";
import axios from "axios";
import {useAppSelector} from "@/lib/hooks";
import {useRouter} from "next/navigation";


const PayButton = () => {
    const router = useRouter()

    const user = useAppSelector(state => state.user.id)

    const {value, isPaymentSelected} = useAppSelector(state => state.payment)

    return (
        <OrangeButton
            onClick={async () => {
                const response = await axios.post('https://api.youngrusssia.ru/replenishment', JSON.stringify({
                    user_id: user,
                    amount: +value
                }))
                const url = response.data
                router.push(url)
            }}
            disabled={!value || !isPaymentSelected}
        />
    );
};

export default PayButton;