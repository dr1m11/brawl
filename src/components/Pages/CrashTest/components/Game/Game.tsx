'use client'
import styles from "./Game.module.css";
import clsx from "clsx";
import Rows from "@/components/Pages/Crash/components/Rows/Rows";
import Image from "next/image";
import Charecter from "../../../../../../public/Crash/Charecter.svg";
import {useAppSelector} from "@/lib/hooks";
import localFont from "next/font/local";
import {useEffect, useState} from "react";
import {Area, AreaChart, ResponsiveContainer} from "recharts";
// import {Charecter} from "@/components/Pages/Crash/components/Charecter/Charecter";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

interface CrashInterface {
    status: "Running" | "Crashed" | "Pending"
    multiplier: number
    time_before_start: number,
    length: number,
    rotate: number,
    game_id: number,
}


const Game = ({rotate, length}) => {
    const [width, setWidth] = useState(1)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setWidth(randomInteger(81, 91))
        }, 2000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const data = [
        {
            "name": "Page A",
            "pv": 1 * width,
        },
        {
            "name": "Page A",
            "pv": 4 * width,
        },
        {
            "name": "Page A",
            "pv": 9 * width,
        },
        {
            "name": "Page B",
            "pv": 16 * width,
        },
        {
            "name": "Page B",
            "pv": 25 * width,
        },
        {
            "name": "Page B",
            "pv": 36 * width,
        },
        {
            "name": "Page B",
            "pv": 49 * width,
        },
        {
            "name": "Page B",
            "pv": 64 * width,
        },
        {
            "name": "Page B",
            "pv": 81 * width,
        },
        {
            "name": "Page C",
            "pv": 100 * width,
        },
    ]

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return +(rand / 100).toFixed(2)
    }

    console.log(width)

    return (

        <div className={styles.graph__game}>
            <div className={styles.chart} style={{width: '80%'}}>
                <Image src={Charecter} alt={'as'} height={100} width={100} className={styles.crash__charecter} style={{
                    top: `${ -((width * 90) - 100)}%`,
                    transitionDuration: '2s'
                }}/>
                <ResponsiveContainer width={`${100}%`} height="80%">
                    <AreaChart data={data} className={styles.chart}
                    >
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f39c12" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#f39c12" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f39c12" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#f39c12" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Area animationDuration={2000} type="monotone" dataKey="pv" stroke="#f39c12" fillOpacity={1}
                              fill="url(#colorPv)"/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Game;