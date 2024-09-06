'use client'
import React from 'react';
import styles from "@/components/Pages/Payment/components/PaymentInfo/PaymentInfo.module.css";
import clsx from "clsx";
import localFont from "next/font/local";
import {useAppSelector} from "@/lib/hooks";
import PriceIcon from "@/components/PriceIcon/PriceIcon";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

const Value = () => {
    const {value, promo} = useAppSelector(state => state.payment)

    return (
        <span className={clsx(styles.info__value, daysOne.className)}>{value ? promo === 'OPEN10' ? +value * 1.1 : value : 0} <PriceIcon/></span>
    );
};

export default Value;