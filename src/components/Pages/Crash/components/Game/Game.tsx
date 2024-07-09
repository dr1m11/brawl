'use client'
import styles from "./Game.module.css";
import clsx from "clsx";
import Rows from "@/components/Pages/Crash/components/Rows/Rows";
import Image from "next/image";
import Charecter from "../../../../../../public/Crash/Charecter.svg";
import {useAppSelector} from "@/lib/hooks";
import localFont from "next/font/local";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

interface CrashInterface {
    status: "Running" | "Crashed" | "Pending"
    multiplier: number
    time_before_start: number,
    length: number,
    rotate: number,
    game_id: number,
}

const Game = () => {
    const {socketEvent} = useAppSelector(state => state.crash)


    return (
        socketEvent.status === "Running" || socketEvent.status === "Crashed" ?
            <div className={styles.graph__game}>
                <div className={styles.count}>
                    <h1 className={clsx(styles.multiplier, daysOne.className)}
                        style={{color: socketEvent.status === "Crashed" && '#ff0000'}}>{socketEvent.multiplier.toFixed(2)}x</h1>
                    <h2 className={styles.multiplier__label}>в раунде</h2>
                </div>
                <Rows />
                <div className={styles.graphic}
                     style={{
                         width: `${socketEvent.length}%`,
                         transform: `rotateZ(-${socketEvent.rotate}deg)`,
                         background: socketEvent.status === "Crashed" && "linear-gradient(180.00deg, rgba(255, 24, 24, 0.3) 37.11%,rgba(249, 159, 98, 0) 100%)"
                     }}>
                    <Image src={Charecter} alt={'Charecter'} width={83} height={47}
                           className={styles.crash__charecter}/>
                </div>
            </div>
            :
            <div className={styles.timer}>
                <h1 className={clsx(daysOne.className, styles.timer__label)}>{(+socketEvent.time_before_start).toFixed(1)}s</h1>
            </div>
    );
};

export default Game;