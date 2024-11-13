'use client'
import styles from './Kostil.module.css'
import Game from "@/components/Pages/Crash/components/Game/Game";
import PlayersList from "@/components/Pages/Crash/components/PlayersList/PlayersList";
import BetCounter from "@/components/Pages/Crash/components/BetCounter/BetCounter";
import BetTips from "@/components/Pages/Crash/components/BetTips/BetTips";
import {useAppDispatch, useAppSelector, useAppStore} from "@/lib/hooks";
import {useEffect, useRef, useState} from "react";
import {
    PlayerInterface,
    setIsBetSet,
    setIsModalOpen,
    setSocketEvent,
    setUsersBets
} from "@/lib/crashSlice/crashSlice";
import BetButton from "@/components/Pages/Crash/components/BetButton/BetButton";
import {useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {API_URL, SOCKET_API_URL} from "@/constants";
import {axiosClassic} from "@/api/axios";
import History from "@/components/Pages/Crash/components/History/History";


interface CrashInterface {
    status: "Running" | "Crashed" | "Pending"
    multiplier: number
    time_before_start: number,
    length: number,
    rotate: number,
    game_id: number,
}

interface IHistory {
    id: number
    win_multiplier: number | string
}

const Kostil = () => {
    const dispatch = useAppDispatch()

    return (
        <>
            <div className={styles.info}>
                <button className={styles.infoBtn} onClick={() => dispatch(setIsModalOpen(true))}>Как играть?</button>
            </div>
            <div className={styles.game}>
            <div className={styles.graph}>
                    <Game />
                    <History />
                </div>
                <div className={styles.players}>
                    <div className={styles.choose__filter}>
                        <h5 className={styles.players__title}>Ставки</h5>
                    </div>
                    <PlayersList />
                    {/*<h5 className={styles.bets__count}>Всего {usersBets ? usersBets.length : 0} ставок</h5>*/}
                </div>
            </div>
            <div className={styles.bottom_menu}>
                <div className={styles.bet}>
                    {/*<BetCounter bet={bet} setBet={setBet}/>*/}
                    {/*<BetTips/>*/}
                    {/*<BetButton onClick={!isBetSet ? sendBet : withdrawBet}/>*/}
                </div>
                <div className={styles.playersVisible}>
                    <div className={styles.choose__filter}>
                        <h5 className={styles.players__title}>Ставки</h5>
                    </div>
                    {/*<PlayersList bets={userBets}/>*/}
                    {/*<h5 className={styles.bets__count}>Всего {usersBets ? usersBets.length : 0} ставок</h5>*/}
                </div>
            </div>
        </>
    );
};

export default Kostil;

