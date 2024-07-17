'use client'
import styles from './Kostil.module.css'
import clsx from "clsx";
import Game from "@/components/Pages/Wheel/components/WheelGame/Game";
import Better from "@/components/Pages/Wheel/components/Better/Better";
import BetButton from "@/components/Pages/Wheel/components/BetButton/BetButton";
import Multipliers from "@/components/Pages/Wheel/components/Multipliers/Multipliers";
import History from "@/components/Pages/Wheel/components/History/History";
import Info from "@/components/Pages/Wheel/components/Info/Info";
import localFont from "next/font/local";
import {useEffect, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setBet, setIsBetSet, setSocketEvent, setUser, setUserBets} from "@/lib/wheelSlice/wheelSlice";
import axios from "axios";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

interface SocketEventInterface {
    game_id: number
    status: "Pending" | "Playing" | "End"
    cell: number
    time_before_start: number
}

const Kostil = () => {

    const ws = useRef(null)

    const {user, bet, socketEvent, userCell} = useAppSelector(state => state.wheel)
    const main_amount = useAppSelector(state => state.wheel.userBets.main_amount)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setUser(localStorage.getItem('userId')))
        axios.get('https://api.youngrusssia.ru/roulette/init-bets-for-new-client')
            .then(data => dispatch(setUserBets(data.data)))
    }, []);

    useEffect(() => {
        setIsBetSet(false)
    }, [socketEvent.status]);

    useEffect(() => {
        // Создание WebSocket соединения при монтировании компонента
        ws.current = new WebSocket('wss://api.youngrusssia.ru/roulette');

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data)
            if (data.main_amount === 0 || data.main_amount) {
                dispatch(setUserBets(data))
                console.log(data)
            } else {
                dispatch(setSocketEvent(data))
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
                "amount": bet,
                "cell": userCell
            }))
            dispatch(setIsBetSet(true))
        } else {
            console.error('WebSocket соединение не открыто');
        }
    };


    return (
        <>
            <div className={styles.game}>
                <div className={styles.game__label}>
                    <h1 className={clsx(styles.heading, daysOne.className)}>{main_amount} RUB</h1>
                    <span className={styles.heading__label}>в этом раунде</span>
                </div>
                <Game pending={socketEvent.status === "Pending" || socketEvent.status === "End"} cell={socketEvent.cell}/>
                <div className={styles.game__menu}>
                    <Better/>
                    <BetButton time={socketEvent.time_before_start} onClick={sendBet}/>
                    <Multipliers/>
                </div>
            </div>
            <History/>
            <Info/>
        </>
    );
};

export default Kostil;