'use client'
import styles from "@/components/Pages/Crash/components/Game/Game.module.css";
import clsx from "clsx";
import localFont from "next/font/local";
import {memo, useEffect, useRef} from "react";
import {useAppSelector} from "@/lib/hooks";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

const CrashTimer = () => {
    const timerRef = useRef<HTMLHeadingElement>(null);
    const animationFrameRef = useRef<number>();
    const endTimeRef = useRef<number | null>(null);
    
    const endTime = useAppSelector(
        state => state.crash.socketEvent.new_game_start_time,
        (prev, next) => prev === next
    );

    useEffect(() => {
        if (!endTime || !timerRef.current) return;

        endTimeRef.current = new Date(endTime).getTime();

        const updateTimer = () => {
            if (!endTimeRef.current || !timerRef.current) return;

            const now = Date.now();
            const timeLeft = (endTimeRef.current - now) / 1000;

            if (timeLeft <= 0) {
                if (timerRef.current) {
                    timerRef.current.textContent = '0.0s';
                }
                return;
            }

            timerRef.current.textContent = `${timeLeft.toFixed(1)}s`;
            animationFrameRef.current = requestAnimationFrame(updateTimer);
        };

        updateTimer();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [endTime]);

    return (
        <div className={styles.timer}>
            <h1 
                ref={timerRef}
                className={clsx(daysOne.className, styles.timer__label)}
            >
                0.0s
            </h1>
        </div>
    );
};

export default memo(CrashTimer);