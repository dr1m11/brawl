'use client'
import {memo} from "react";
import clsx from "clsx";
import localFont from "next/font/local";
import styles from '../Game/Game.module.css'

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});


const TimerContent = ({ endTime }: { endTime: string }) => {

    return (
        <h1 
            className={clsx(daysOne.className, styles.timer__label)}
            style={{
                transform: 'translate3d(0,0,0)',
                backfaceVisibility: 'hidden',
                perspective: 1000,
                contain: 'content'
            }}
        >
            {endTime}
        </h1>
    );
};

export default memo(TimerContent); 