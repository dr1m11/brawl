'use client'
import styles from "@/components/Pages/Crash/components/Game/Game.module.css";
import clsx from "clsx";
import localFont from "next/font/local";
import {FC, useMemo} from 'react';

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

interface IProps {
    multiplier: number
    status: 'Pending' | 'Running' | 'Crashed'
}

export const CrashMultiplier: FC<IProps> = ({multiplier, status}) => {

    const formattedMultiplier = useMemo(() => {
        return multiplier?.toFixed(2);
    }, [multiplier]);

    return (
        <div className={styles.count}>
            <h1 className={clsx(styles.multiplier, daysOne.className)}
                style={{color: status === "Crashed" ? '#ff0000' : undefined}}>
                {formattedMultiplier}x
            </h1>
            <h2 className={styles.multiplier__label}>в раунде</h2>
        </div>
    )
}