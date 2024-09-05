'use client'
import { axiosAuth } from "@/api/axios"
import OrangeButton from "@/components/ui/OrangeButton/OrangeButton"
import { useAppSelector } from "@/lib/hooks"
import { useRouter } from "next/navigation"
import axios from "axios";
import {useState} from "react";


const PayButton = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {value, selectedMethod, promo} = useAppSelector(state => state.payment)

    return (
        <OrangeButton
            onClick={async () => {
                setIsLoading(true)
                const ip = await axios.get('https://api.ipify.org?format=json')
                const response = await axiosAuth.post(`/authenticated/replenishment`, JSON.stringify({
                    amount: +value,
                    promo,
                    ip: ip.data.ip,
                    i: selectedMethod.data
                }))
                const url = response.data
                router.push(url)
                setIsLoading(false)
            }}
            disabled={!value || !selectedMethod || isLoading}
            margin={44}
        />
    );
};

export default PayButton;