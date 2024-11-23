'use client'
import dynamic from 'next/dynamic'
import {useAppSelector} from "@/lib/hooks";
import styles from '../Game/Game.module.css'
import {memo} from "react";

const TimerContent = dynamic(() => import('./TimerContent'), {
    ssr: false
});

const CrashTimer = () => {
    const endTime = useAppSelector(state => state.crashTimer.timer);

    return (
        <div
            className={styles.timer}
            style={{
                contain: 'content',
                transform: 'translate3d(0,0,0)'
            }}
        >
            <TimerContent endTime={endTime} />
        </div>
    );
};

export default memo(CrashTimer);