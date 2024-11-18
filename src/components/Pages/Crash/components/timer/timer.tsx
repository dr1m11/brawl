'use client'
import styles from "@/components/Pages/Crash/components/Game/Game.module.css";
import clsx from "clsx";
import localFont from "next/font/local";
import {memo, useEffect, useRef, useState} from "react";
import {useAppSelector} from "@/lib/hooks";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

const CrashTimer = () => {
    const [timer, setTimer] = useState<number>(0);
    const timerRef = useRef<NodeJS.Timeout>();
    
    const endTime = useAppSelector(state => state.crash.socketEvent.new_game_start_time,
        (prev, next) => prev === next
    );

    useEffect(() => {
        if (!endTime) return;

        const endTimeMs = new Date(endTime).getTime();
        
        const updateTimer = () => {
            const now = Date.now();
            const timeLeft = (endTimeMs - now) / 1000;
            
            if (timeLeft <= 0) {
                clearInterval(timerRef.current);
                return;
            }
            
            setTimer(Number(timeLeft.toFixed(1)));
        };

        // Обновляем каждые 100мс вместо использования while
        timerRef.current = setInterval(updateTimer, 100);
        updateTimer(); // Первоначальное обновление

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [endTime]);

    return (
        <div className={styles.timer}>
            <h1 className={clsx(daysOne.className, styles.timer__label)}>{timer}s</h1>
        </div>
    );
};

export default memo(CrashTimer);