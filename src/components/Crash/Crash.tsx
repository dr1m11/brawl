'use client'
import styles from './Crash.module.css'
import Image from "next/image";
import BG from '@/../public/Crash/BG.svg'
import clsx from "clsx";
import {Manrope} from "next/font/google";
import {useState} from "react";
import localFont from "next/font/local";
import Charecter from '@/../public/Crash/Charecter.svg'
import Player from '@/components/CrashPlayer/Player'
import BetCounter from "@/components/BetCounter/BetCounter";

const manrope = Manrope({subsets: ['latin', 'cyrillic'], weight: ['300', '400', '500']})
const daysOne = localFont({src: '../../Fonts/DaysOne-Regular.ttf'});


const Crash = () => {

    const [length, setLength] = useState(0)
    const [rotate, setRotate] = useState(0)
    const [activeBet, setActiveBet] = useState(false)
    const [activeWithdraw, setActiveWithdraw] = useState(false)

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const anim = async () => {
        for (let i = 0; i <= 100; i += 1) {
            setLength(i)
            await sleep(25)
        }
        setRotate(19.5)
        for (let i = 100; i <= 108; i += 0.005) {
            setLength(i)
            await sleep(12.5)
        }
    }

    return (
        <div className={clsx(styles.root, manrope.className)}>
            <Image src={BG} alt={'Background'} width={1435} height={876} className={styles.bg}/>
            <div className={styles.wrapper}>
                <div className={styles.game}>
                    <div className={styles.graph}>
                        <div className={styles.graph__game}>
                            <div className={styles.count}>
                                <h1 className={clsx(styles.multiplier, daysOne.className)}>5,00x</h1>
                                <h2 className={styles.multiplier__label}>в раунде</h2>
                            </div>
                            <div className={styles.rows}>
                                <div className={styles.row}/>
                                <div className={styles.row}/>
                                <div className={styles.row}/>
                                <div className={styles.row}/>
                                <div className={styles.row}/>
                            </div>
                            <div className={styles.graphic} style={{width: `${length}%`, transform: `rotateZ(-${rotate}deg)`}}>
                                <Image src={Charecter} alt={'Charecter'} width={83} height={47} className={styles.crash__charecter}/>
                            </div>
                        </div>
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
                    <button className={styles.bet__btn} onClick={anim}>
                        <h5 className={daysOne.className}>СТАВКА</h5>
                        <span className={styles.bet__btn__label}>255 RUB</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Crash;