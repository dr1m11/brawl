'use client'
import styles from "@/components/Pages/Crash/components/Game/Game.module.css";
import clsx from "clsx";
import {useAppSelector} from "@/lib/hooks";
import localFont from "next/font/local";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

export const CrashMultiplier = () => {

    const {status, multiplier} = useAppSelector(state => state.crash.socketEvent)

    return (
        <div className={styles.count}>
            <h1 className={clsx(styles.multiplier, daysOne.className)}
                style={{color: status === "Crashed" && '#ff0000'}}>{multiplier.toFixed(2)}x</h1>
            <h2 className={styles.multiplier__label}>в раунде</h2>
        </div>
    )
}