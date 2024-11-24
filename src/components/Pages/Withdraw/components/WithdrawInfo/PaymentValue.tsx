'use client'
import React from 'react';
import styles from "@/components/Pages/Payment/components/PaymentInfo/PaymentInfo.module.css";
import clsx from "clsx";
import localFont from "next/font/local";
import {useAppSelector} from "@/lib/hooks";
import PriceIcon from "@/components/PriceIcon/PriceIcon";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

const PaymentValue = () => {
    const {price} = useAppSelector(state => state.withdraw)

    return (
        <span className={clsx(styles.info__value, daysOne.className)}>{price} <PriceIcon /></span>
);
};

export default PaymentValue;