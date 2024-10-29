'use client'
import styles from './WheelItem.module.css'
import GreenItem from '@/../public/Wheel/GreenItem.svg'
import Image from "next/image";
import clsx from "clsx";
import {useEffect, useState} from "react";

interface WheelItemProps {
    rotate: number
    multiply: number
    image: any
    pending: boolean
}
const WheelItem = ({rotate, multiply, image, pending}: WheelItemProps) => {

    return (
        <div className={clsx(styles.root)} style={{transform: `rotate(${rotate}deg)`, transitionDuration: pending && '0s'}} >
            <Image src={image} alt={'Green Item'} width={68} height={83} className={styles.bg} loading={'eager'}/>
            <h1 className={styles.label}>x{multiply}</h1>
        </div>
    );
};

export default WheelItem;