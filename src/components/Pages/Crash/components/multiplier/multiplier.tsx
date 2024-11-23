'use client'
import styles from "@/components/Pages/Crash/components/Game/Game.module.css";
import clsx from "clsx";
import {useAppSelector} from "@/lib/hooks";
import localFont from "next/font/local";
import {memo, useMemo} from 'react';

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

export const CrashMultiplier = memo(function CrashMultiplier(){
    const multiplier = useAppSelector(state => state.crashMultiplier.multiplier)
    const status = useAppSelector(state => state.crashStatus.status)

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
}, () => true)