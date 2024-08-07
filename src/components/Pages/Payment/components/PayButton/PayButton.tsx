'use client'
import OrangeButton from "@/components/ui/OrangeButton/OrangeButton";
import axios from "axios";
import {useAppSelector} from "@/lib/hooks";
import {useRouter} from "next/navigation";
import {API_URL} from "@/constants";
import {axiosAuth} from "@/api/axios";


const PayButton = () => {
    const router = useRouter()

    const {value, isPaymentSelected} = useAppSelector(state => state.payment)

    return (
        <OrangeButton
            onClick={async () => {
                const response = await axiosAuth.post(`/authenticated/replenishment`, JSON.stringify({
                    amount: +value
                }))
                const url = response.data
                router.push(url)
            }}
            disabled={!value || !isPaymentSelected}
            margin={44}
        />
    );
};

export default PayButton;