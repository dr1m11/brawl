'use client'
import React, {useMemo} from 'react';
import styles from "@/components/Pages/Payment/components/PaymentInfo/PaymentInfo.module.css";
import clsx from "clsx";
import localFont from "next/font/local";
import {useAppSelector} from "@/lib/hooks";
import {useQuery} from "@tanstack/react-query";
import {axiosClassic} from "@/api/axios";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

const PaymentValue = () => {
    const {data} = useQuery({
        queryKey: ['get-gems-price'],
        queryFn: () => axiosClassic.get('/gems-prices')
    })

    const value = useAppSelector(state => state.withdraw.value)

    const price = useMemo(() => {
        return data?.data ? (data?.data.find(item => item.position == value)).price : 0
    }, [value, data?.data])

    return (
        <span className={clsx(styles.info__value, daysOne.className)}>{price} RUB</span>
);
};

export default PaymentValue;