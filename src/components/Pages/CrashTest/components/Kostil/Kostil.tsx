'use client'
import styles from './Kostil.module.css'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {useEffect, useRef, useState} from "react";
import {setIsBetSet, setSocketEvent, setUser, setUsersBets} from "@/lib/crashSlice/crashSlice";
import axios from "axios";
import {useQueryClient} from "@tanstack/react-query";
import Game from "@/components/Pages/CrashTest/components/Game/Game";
import PlayersList from "@/components/Pages/CrashTest/components/PlayersList/PlayersList";
import BetCounter from "@/components/Pages/CrashTest/components/BetCounter/BetCounter";
import BetTips from "@/components/Pages/CrashTest/components/BetTips/BetTips";
import Automation from "@/components/Pages/CrashTest/components/Automation/Automation";
import BetButton from "@/components/Pages/CrashTest/components/BetButton/BetButton";

interface CrashInterface {
    status: "Running" | "Crashed" | "Pending"
    multiplier: number
    time_before_start: number,
    length: number,
    rotate: number,
    game_id: number,
}

const Kostil = () => {
    const [length, setLength] = useState(0)
    const [rotate, setRotate] = useState(0)

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

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
        <>
            <div className={styles.game}>
                <div className={styles.graph}>
                    <Game rotate={rotate} length={length}/>
                    <div className={styles.prev__bets}></div>
                </div>
                <div className={styles.players}>
                    <div className={styles.choose__filter}>
                        <button className={styles.filter__button}>Все</button>
                        <button className={styles.filter__button}>Мои</button>
                        <button className={styles.filter__button}>Топ</button>
                    </div>
                    <PlayersList/>
                    <h5 className={styles.bets__count}>Всего 40 ставок</h5>
                </div>
            </div>
            <div className={styles.bet}>
                <BetCounter/>
                <BetTips/>
                <Automation/>
                <BetButton onClick={anim} />
            </div>
        </>
    );
};

export default Kostil;