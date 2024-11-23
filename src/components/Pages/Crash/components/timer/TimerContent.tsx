'use client'
import {memo, useEffect, useRef} from "react";
import clsx from "clsx";
import localFont from "next/font/local";
import styles from '../Game/Game.module.css'

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});


const TimerContent = ({ endTime }: { endTime: string | null }) => {
    const timerRef = useRef<HTMLHeadingElement>(null);
    const rafRef = useRef<number>();
    const startTimeRef = useRef<number>(0);
    const durationRef = useRef<number>(0);

    useEffect(() => {
        if (!endTime || !timerRef.current) return;

        const cleanup = () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = undefined;
            }
        };

        cleanup(); // Очищаем предыдущую анимацию перед началом новой

        startTimeRef.current = performance.now();
        const endTimeMs = new Date(endTime).getTime();
        durationRef.current = endTimeMs - Date.now();

        const updateTimer = () => {
            if (!timerRef.current) return;

            const now = performance.now();
            const elapsed = now - startTimeRef.current;
            const timeLeft = Math.max(0, (durationRef.current - elapsed) / 1000);

            if (timeLeft <= 0) {
                timerRef.current.textContent = '0.0s';
                return;
            }

            timerRef.current.textContent = `${timeLeft.toFixed(1)}s`;
            rafRef.current = requestAnimationFrame(updateTimer);
        };

        rafRef.current = requestAnimationFrame(updateTimer);
        return cleanup;
    }, [endTime]);

    return (
        <h1 
            ref={timerRef}
            className={clsx(daysOne.className, styles.timer__label)}
            style={{
                transform: 'translate3d(0,0,0)',
                backfaceVisibility: 'hidden',
                perspective: 1000,
                contain: 'content'
            }}
        >
            0.0s
        </h1>
    );
};

export default memo(TimerContent); 