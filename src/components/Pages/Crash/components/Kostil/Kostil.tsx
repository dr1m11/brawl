'use client'
import styles from './Kostil.module.css'
import Game from "@/components/Pages/Crash/components/Game/Game";
import PlayersList from "@/components/Pages/Crash/components/PlayersList/PlayersList";
import BetCounter from "@/components/Pages/Crash/components/BetCounter/BetCounter";
import BetTips from "@/components/Pages/Crash/components/BetTips/BetTips";
import Automation from "@/components/Pages/Crash/components/Automation/Automation";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {useEffect, useRef} from "react";
import {setIsBetSet, setSocketEvent, setUser, setUsersBets} from "@/lib/crashSlice/crashSlice";
import BetButton from "@/components/Pages/Crash/components/BetButton/BetButton";
import {useQueryClient} from "@tanstack/react-query";


interface CrashInterface {
    status: "Running" | "Crashed" | "Pending"
    multiplier: number
    time_before_start: number,
    length: number,
    rotate: number,
    game_id: number,
}

const Kostil = () => {
    const dispatch = useAppDispatch()

    const ws = useRef(null)


    const {socketEvent, user, bet, isBetSet} = useAppSelector(state => state.crash)

    useEffect(() => {
        dispatch(setUser(localStorage.getItem('userId')))
    }, []);

    const queryClient = useQueryClient()

    useEffect(() => {
        queryClient.invalidateQueries({
            queryKey: ['user']
        })
    }, [socketEvent.status]);

    useEffect(() => {
        // Создание WebSocket соединения при монтировании компонента
        ws.current = new WebSocket('wss://api.youngrusssia.ru/crash');

        ws.current.onopen = () => {
            console.log('WebSocket открыто');
        };

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data)
            if (data.bets) {
                dispatch(setUsersBets(data.bets))
            } else {
                const mainData: CrashInterface = data
                dispatch(setSocketEvent(mainData))
            }
        };

        ws.current.onclose = () => {
            console.log('WebSocket закрыто');
        };

        ws.current.onerror = (error) => {
            console.error('Ошибка WebSocket:', error);
        };

        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, []);

    const sendBet = () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                "game_id": socketEvent.game_id,
                "player_id": user,
                "amount": bet
            }))
            dispatch(setIsBetSet(true))
            queryClient.invalidateQueries({
                queryKey: ['user']
            })
        } else {
            console.error('WebSocket соединение не открыто');
        }
    };

    const withdrawBet = () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                "game_id": socketEvent.game_id,
                "player_id": user,
                "multiplier": socketEvent.multiplier
            }))
            dispatch(setIsBetSet(false))
        } else {
            console.error('WebSocket соединение не открыто');
        }
    };

    return (
        <>
            <div className={styles.game}>
                <div className={styles.graph}>
                    <Game/>
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
                <BetButton onClick={!isBetSet ? sendBet : withdrawBet} />
            </div>
        </>
    );
};

export default Kostil;