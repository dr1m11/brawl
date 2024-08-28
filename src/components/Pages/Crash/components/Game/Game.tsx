'use client'
import styles from "./Game.module.css";
import clsx from "clsx";
import Rows from "@/components/Pages/Crash/components/Rows/Rows";
import Image from "next/image";
import Charecter from "../../../../../../public/Crash/Charecter.svg";
import {useAppSelector} from "@/lib/hooks";
import localFont from "next/font/local";
import GameBg from "@/components/Pages/Crash/components/GameBg/GameBg";
import useResize from "@/hooks/useResize";

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

    const size = useResize()

    function getWidth(data) {
        if ((size <= 900) && (data >= 105)) {
            return data - ((size / 8) / 100)
        }
        return data
    }

    return (
        socketEvent.status === "Running" || socketEvent.status === "Crashed" || socketEvent.status === 'Pending' ?
            <div className={styles.graph__game}>
                <GameBg/>
                <div className={styles.count}>
                    <h1 className={clsx(styles.multiplier, daysOne.className)}
                        style={{color: socketEvent.status === "Crashed" && '#ff0000'}}>{socketEvent.multiplier.toFixed(2)}x</h1>
                    <h2 className={styles.multiplier__label}>в раунде</h2>
                </div>
                <Rows/>
                {/*<div className={styles.graphic}*/}
                {/*     style={{*/}
                {/*         width: `${getWidth(socketEvent.length)}%`,*/}
                {/*         transform: `rotateZ(-${socketEvent.rotate}deg)`,*/}
                {/*         background: socketEvent.status === "Crashed" && "linear-gradient(180.00deg, rgba(255, 24, 24, 0.3) 37.11%,rgba(249, 159, 98, 0) 100%)"*/}
                {/*     }}>*/}
                {/*    <Image src={Charecter} alt={'Charecter'} width={83} height={47}*/}
                {/*           className={styles.crash__charecter}/>*/}
                {/*</div>*/}
                <div className={'absolute left-0 right-0 bottom-0 top-0'}>
                    <svg style={{width: "100%", height: '100%',}}>
                        <defs>
                            <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
                                <stop stopColor="#9d7aff" stopOpacity=".33"/>
                                <stop offset="1.87" stopColor="#9d7aff" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="grad_stroke" x1="0" x2="1" y1="0" y2="1">
                                <stop stopColor="#9D7AFF"/>
                                <stop offset=".687" stopColor="#622BFC"/>
                                <stop offset="0.1" stopColor="#5c24fc" stopOpacity="0"/>
                            </linearGradient>
                            <clipPath id="clip">
                                <path d={`M 0 0 L 100 0 L 100 100 L 0 100 Z`}/>
                            </clipPath>
                        </defs>
                        <g>
                            <rect
                                x={0}
                                y={0}
                                width="100"
                                height="100"
                                fill="red"
                                stroke="none"
                                clipPath="url(#clip)"
                                transform={`translate(550, 30)`}
                            />
                            <path
                                d={`M 0 266.39 Q 423.07 266.39 640 40`}
                                fill="transparent"
                                stroke="url(#grad_stroke)"
                            />
                            <path
                                d={`M 0 266.39 Q 423.07 266.39 640 40 L 640 266.39 Z`}
                                fill="url(#grad)"
                            />
                        </g>
                    </svg>
                    <svg style={{width: "100%", height: '100%', zIndex: '100'}}>
                        <defs>
                            <clipPath id="clip">
                                <path d={`M 0 0 L 100 0 L 100 100 L 0 100 Z`}/>
                            </clipPath>
                        </defs>
                        <g>
                            <rect
                                x={0}
                                y={0}
                                width="100"
                                height="100"
                                fill="red"
                                stroke="none"
                                clipPath="url(#clip)"
                                transform={`translate(550, 30)`}
                            />
                        </g>
                    </svg>
                </div>
            </div>
            :
            <div className={styles.timer}>
                <h1 className={clsx(daysOne.className, styles.timer__label)}>{(+socketEvent.time_before_start).toFixed(1)}s</h1>
            </div>
    )
        ;
};

export default Game;