'use client'
import styles from "@/components/Pages/Crash/components/Game/Game.module.css";
import clsx from "clsx";
import localFont from "next/font/local";
import {memo, useEffect, useRef} from "react";
import {useAppSelector} from "@/lib/hooks";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

const CrashTimer = () => {
    const timerRef = useRef<HTMLHeadingElement>(null);
    const rafRef = useRef<number>();
    const startTimeRef = useRef<number>(0);
    const durationRef = useRef<number>(0);
    
    const endTime = useAppSelector(
        state => state.crash.socketEvent.new_game_start_time,
        (prev, next) => prev === next
    );

    useEffect(() => {
        if (!endTime || !timerRef.current) return;

        startTimeRef.current = performance.now();
        const endTimeMs = new Date(endTime).getTime();
        durationRef.current = endTimeMs - Date.now();

        const updateTimer = (currentTime: number) => {
            if (!timerRef.current) return;

            const elapsed = currentTime - startTimeRef.current;
            const timeLeft = Math.max(0, (durationRef.current - elapsed) / 1000);

            if (timeLeft <= 0) {
                timerRef.current.textContent = '0.0s';
                return;
            }

            const formattedTime = timeLeft.toFixed(1);
            if (timerRef.current.textContent !== `${formattedTime}s`) {
                timerRef.current.textContent = `${formattedTime}s`;
            }

            rafRef.current = requestAnimationFrame(updateTimer);
        };

        rafRef.current = requestAnimationFrame(updateTimer);

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [endTime]);

    return (
        <div className={styles.timer}>
            <h1 
                ref={timerRef}
                className={clsx(daysOne.className, styles.timer__label)}
                style={{
                    transform: 'translateZ(0)',
                    willChange: 'content'
                }}
            >
                0.0s
            </h1>
        </div>
    );
};

export default memo(CrashTimer);