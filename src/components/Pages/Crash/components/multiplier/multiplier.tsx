'use client'
import styles from "@/components/Pages/Crash/components/Game/Game.module.css";
import clsx from "clsx";
import {useAppSelector} from "@/lib/hooks";
import localFont from "next/font/local";
import { useMemo } from 'react';

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

export const CrashMultiplier = () => {
    const {status, multiplier} = useAppSelector(state => state.crash.socketEvent, 
        (prev, next) => {
            return prev.status === next.status && prev.multiplier === next.multiplier;
        }
    );

    const formattedMultiplier = useMemo(() => {
        return multiplier.toFixed(2);
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