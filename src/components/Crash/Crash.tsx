'use client'
import styles from './Crash.module.css'
import Image from "next/image";
import BG from '@/../public/Crash/BG.svg'
import clsx from "clsx";
import {Manrope} from "next/font/google";
import {useEffect, useState} from "react";
import localFont from "next/font/local";
import Charecter from '@/../public/Crash/Charecter.svg'
import Player from '@/components/CrashPlayer/Player'
import BetCounter from "@/components/BetCounter/BetCounter";

const manrope = Manrope({subsets: ['latin', 'cyrillic'], weight: ['300', '400', '500']})
const daysOne = localFont({src: '../../Fonts/DaysOne-Regular.ttf'});


interface CrashInterface {
    status: "Running" | "Crashed" | "Pending"
    multiplier: number
    time_before_start: number,
    length: number,
    rotate: number
}

const Crash = () => {

    const [length, setLength] = useState(0)
    const [rotate, setRotate] = useState(0)
    const [activeBet, setActiveBet] = useState(false)
    const [activeWithdraw, setActiveWithdraw] = useState(false)
    const [isGameStarted, setIsGameStarted] = useState<boolean>(false)

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const [socketEvent, setSocketEvent] = useState<CrashInterface>({
        time_before_start: 5,
        multiplier: 2,
        status: "Pending",
        length: 0,
        rotate: 0
    });

    useEffect(() => {
        if (socketEvent.status === "Running")
            anim()
    }, [socketEvent.status]);

    useEffect(() => {
        if ((socketEvent.status === "Crashed") || (socketEvent.status === "Pending")) {
            setLength(0)
            setRotate(0)
        }
    }, [socketEvent.status]);

    useEffect(() => {
        const socket = new WebSocket('wss://api.youngrusssia.ru/crash');

        socket.onopen = function() {
            console.log('Соединение установлено');
        };

        socket.onmessage = function(event) {
            const data: CrashInterface = JSON.parse(event.data)
            setSocketEvent(data)
        };

        socket.onclose = function(event) {
            console.log('Соединение закрыто');
        };

        return () => socket.close()
    }, []);

    const anim = async () => {
        for (let i = 0; i <= 100; i += 0.4) {
            setLength(i)
            await sleep(10)
        }
        setRotate(19.5)
        for (let i = 100; i <= 108; i += 0.004) {
            setLength(i)
            await sleep(10)
        }
    }

    return (
        <div className={clsx(styles.root, manrope.className)}>
            <Image src={BG} alt={'Background'} width={1435} height={876} className={styles.bg}/>
            <div className={styles.wrapper}>
                <div className={styles.game}>
                    <div className={styles.graph}>
                        {
                            socketEvent.status === "Running" || socketEvent.status === "Crashed" ?
                            <div className={styles.graph__game}>
                            <div className={styles.count}>
                                <h1 className={clsx(styles.multiplier, daysOne.className)} style={{color: socketEvent.status === "Crashed" && '#ff0000'}}>{socketEvent.multiplier.toFixed(2)}x</h1>
                                <h2 className={styles.multiplier__label}>в раунде</h2>
                            </div>
                            <div className={styles.rows}>
                                <div className={styles.row}/>
                                <div className={styles.row}/>
                                <div className={styles.row}/>
                                <div className={styles.row}/>
                                <div className={styles.row}/>
                            </div>
                            <div className={styles.graphic}
                                 style={{width: `${socketEvent.length}%`, transform: `rotateZ(-${socketEvent.rotate}deg)`, background: socketEvent.status === "Crashed" && "linear-gradient(180.00deg, rgba(255, 24, 24, 0.3) 37.11%,rgba(249, 159, 98, 0) 100%)"}}>
                                <Image src={Charecter} alt={'Charecter'} width={83} height={47}
                                       className={styles.crash__charecter}/>
                            </div>
                        </div>
                                :
                                <div className={styles.timer}>
                                    <h1 className={clsx(daysOne.className, styles.timer__label)}>{socketEvent.time_before_start.toFixed(1)}s</h1>
                                </div>
                        }
                        <div className={styles.prev__bets}></div>
                    </div>
                    <div className={styles.players}>
                        <div className={styles.choose__filter}>
                            <button className={styles.filter__button}>Все</button>
                            <button className={styles.filter__button}>Мои</button>
                            <button className={styles.filter__button}>Топ</button>
                        </div>
                        <div className={styles.players__list}>
                            <Player />
                            <Player />
                            <Player />
                            <Player />
                            <Player />
                            <Player />
                            <Player />
                            <Player />
                            <Player />
                            <Player />
                            <Player />
                            <Player />
                            <Player />
                            <Player />
                        </div>
                        <h5 className={styles.bets__count}>Всего 40 ставок</h5>
                    </div>
                </div>
                <div className={styles.bet}>
                    <BetCounter />
                    <div className={styles.bet__tips}>
                        <span className={styles.tip__sums}>+50</span>
                        <span className={styles.tip__sums}>+100</span>
                        <span className={styles.tip__sums}>+200</span>
                        <span className={styles.tip__sums}>+500</span>
                    </div>
                    <div className={styles.automation}>
                        <div className={styles.auto}>
                            <div className={styles.auto__button} onClick={() => setActiveBet(!activeBet)}>
                                {activeBet && <div className={styles.auto__button__active}/>}
                            </div>
                            <span className={styles.auto__label}>Автоставка</span>
                        </div>
                        <div className={styles.auto}>
                            <div className={styles.auto__button} onClick={() => setActiveWithdraw(!activeWithdraw)}>
                                {activeWithdraw && <div className={styles.auto__button__active}/>}
                            </div>
                            <span className={styles.auto__label}>Автовывод</span>
                        </div>
                        <div className={styles.auto__multiplier}>
                            <h5 className={styles.auto__multiplier__label}>x2.00</h5>
                        </div>
                    </div>
                    <button className={styles.bet__btn} onClick={() => setIsGameStarted(true)}>
                        <h5 className={daysOne.className}>СТАВКА</h5>
                        <span className={styles.bet__btn__label}>255 RUB</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Crash;