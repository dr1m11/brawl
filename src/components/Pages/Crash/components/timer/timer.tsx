'use client'
import {useAppSelector} from "@/lib/hooks";
import styles from '../Game/Game.module.css'
import {FC, memo} from "react";
import clsx from "clsx";
import localFont from "next/font/local";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

interface IProps {
    timer: string
}

const CrashTimer: FC<IProps> = ({timer}) => {
    return (
        <div
            className={styles.timer}
            style={{
                contain: 'content',
                transform: 'translate3d(0,0,0)'
            }}
        >
            <h1
                className={clsx(daysOne.className, styles.timer__label)}
                style={{
                    transform: 'translate3d(0,0,0)',
                    backfaceVisibility: 'hidden',
                    perspective: 1000,
                    contain: 'content'
                }}
            >
                {timer}
            </h1>
        </div>
    );
};

export default memo(CrashTimer);