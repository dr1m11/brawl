'use client'
import styles from "@/components/Pages/Crash/components/Game/Game.module.css";
import clsx from "clsx";
import localFont from "next/font/local";
import {memo, useEffect, useState} from "react";
import {sleep} from "@/components/Pages/Case/components/Spinner/Spinner";
import {useAppSelector} from "@/lib/hooks";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

const CrashTimer = () => {
    const [timer, setTimer] = useState<number>(0);

    const endTime = useAppSelector(state => state.crash.socketEvent.new_game_start_time)

    useEffect(() => {
        let mounted = true;
        
        const runTimer = async () => {
            if (!endTime) return;
            
            const endTimeMs = new Date(endTime).getTime();
            
            while (mounted) {
                const now = Date.now();
                const timeLeft = (endTimeMs - now) / 1000;
                
                if (timeLeft <= 0) break;
                
                setTimer(Number(timeLeft.toFixed(1)));
                await sleep(100);
            }
        }
        runTimer();
        return () => {
            mounted = false;
        }
    }, [endTime]);

    return (
        <div className={styles.timer}>
            <h1 className={clsx(daysOne.className, styles.timer__label)}>{timer}s</h1>
        </div>
    )
}

export default memo(CrashTimer)