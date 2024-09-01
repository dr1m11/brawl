'use client'
import React, {useMemo} from 'react';
import styles from "@/components/Pages/Payment/components/PaymentInfo/PaymentInfo.module.css";
import clsx from "clsx";
import localFont from "next/font/local";
import {useAppSelector} from "@/lib/hooks";
import {useQuery} from "@tanstack/react-query";
import {axiosClassic} from "@/api/axios";
import PriceIcon from "@/components/PriceIcon/PriceIcon";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

const formatPrice = (price: string) => {
    if (!price) {
        return
    }
    if (price.includes('gems')) {
        return price.replace(' gems', '')
    }
    return price
}

const PaymentValue = () => {
    const {data} = useQuery({
        queryKey: ['get-gems-price'],
        queryFn: () => axiosClassic.get('/gems-prices')
    })

    const value = useAppSelector(state => state.withdraw.value)

    const price = useMemo(() => {
        return (data?.data.length && value) ? (data?.data.find(item => item.position.includes(value)))?.price : 0
    }, [value, data?.data])

    console.log(price)

    return (
        <span className={clsx(styles.info__value, daysOne.className)}>{price} <PriceIcon /></span>
);
};

export default PaymentValue;