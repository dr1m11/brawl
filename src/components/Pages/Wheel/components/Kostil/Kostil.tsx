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
import {useEffect, useRef} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {
    setHistory,
    setIsBetSet,
    setIsModalOpen,
    setSocketEvent,
    setUser,
    setUserBets
} from "@/lib/wheelSlice/wheelSlice";
import axios from "axios";
import {API_URL, SOCKET_API_URL} from "@/constants";
import {axiosClassic} from "@/api/axios";
import PriceIcon from "@/components/PriceIcon/PriceIcon";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

const Kostil = () => {

    const ws = useRef(null)

    const {user, bet, socketEvent, userCell} = useAppSelector(state => state.wheel)
    const main_amount = useAppSelector(state => state.wheel.userBets.main_amount)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setUser(localStorage.getItem('userId')))
        axios.get(`${API_URL}/roulette/init-bets-for-new-client`)
            .then(data => dispatch(setUserBets(data.data)))
    }, [dispatch]);

    useEffect(() => {
        if (socketEvent.status === "Pending") {
            dispatch(setIsBetSet(false))
        }
        axiosClassic.get('/all-roulette-records').then(data => {
            dispatch(setHistory(data.data))
        })
    }, [dispatch, socketEvent.status]);

    useEffect(() => {
        // Создание WebSocket соединения при монтировании компонента
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ws.current = new WebSocket(`${SOCKET_API_URL}/roulette`);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data)
            if (data.main_amount === 0 || data.main_amount) {
                dispatch(setUserBets(data))
            } else {
                dispatch(setSocketEvent(data))
            }
        };

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ws.current.onclose = () => {
            console.log('WebSocket закрыто');
        };

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ws.current.onerror = (error) => {
            console.error('Ошибка WebSocket:', error);
        };

        return () => {
            if (ws.current) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ws.current.close();
            }
        };
    }, [dispatch]);

    const sendBet = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            ws.current.send(JSON.stringify({
                "game_id": socketEvent.game_id,
                "player_id": user,
                "amount": +((+bet).toFixed(0)),
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
                    <button className={styles.infoBtn} onClick={() => dispatch(setIsModalOpen(true))}>Как играть?
                    </button>
                    <h1 className={clsx(styles.heading, daysOne.className)}>{main_amount} <PriceIcon width={30}
                                                                                                     height={30}/></h1>
                    <span className={styles.heading__label}>в этом раунде</span>
                </div>
                <Game pending={socketEvent.status === "Pending" || socketEvent.status === "End"}
                      cell={socketEvent.cell}/>
                <div className={styles.game__bg}/>
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