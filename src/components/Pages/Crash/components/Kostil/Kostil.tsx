'use client'
import styles from './Kostil.module.css'
import Game from "../Game/Game";
import History from "../History/History";
import Players from "@/components/Pages/Crash/components/Players/Players";
import {useCallback, useEffect, useRef} from "react";
import {TUsersBets} from "@/lib/crashSlice/crashUserBets";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {API_URL, SOCKET_API_URL} from "@/constants";
import axios from "axios";
import {CrashMultiplier} from "@/components/Pages/Crash/components/multiplier/multiplier";
import Rows from "@/components/Pages/Crash/components/Rows/Rows";
import CrashTimer from "@/components/Pages/Crash/components/timer/timer";
import {axiosClassic} from "@/api/axios";
import {
    setHistory,
    setIsBetSet,
    setIsModalOpen,
    setSocketEvent,
    setUser,
    setUsersBets
} from "@/lib/crashSlice/crashSlice";
import {useQueryClient} from "@tanstack/react-query";
import BottomMenu from "@/components/Pages/Crash/components/bottomMenu/bottomMenu";

type TStatus = 'Pending' | 'Running' | 'Crashed'

interface CrashInterface {
    game_id: number
    multiplier: number
    status: TStatus
    timer: string
    users_bets: TUsersBets[]
}


const Kostil = () => {
    const dispatch = useAppDispatch()

    const ws = useRef<WebSocket>(null)

    const {
        socketEvent,
    } = useAppSelector(state => state.crash)

    useEffect(() => {
        dispatch(setUser(localStorage.getItem('userId')))
        axios.get(`${API_URL}/crash/init-bets-for-new-client`)
            .then(data => dispatch(setUsersBets(data.data.bets)))
    }, []);

    const queryClient = useQueryClient()

    useEffect(() => {
        queryClient.invalidateQueries({
            queryKey: ['user']
        })
        axiosClassic.get('/all-crash-records').then(data => dispatch(setHistory(data.data)))
        if (socketEvent.status === "Pending") {
            dispatch(setIsBetSet(false))
        }
    }, [socketEvent.status]);

    useEffect(() => {
        let reconnectAttempts = 0;
        const MAX_RECONNECT_ATTEMPTS = 5;

        const connectWebSocket = () => {
            // Закрываем предыдущее соединение
            if (ws.current) {
                ws.current.close();
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            ws.current = new WebSocket(`${SOCKET_API_URL}/crash`);

            ws.current.onopen = () => {
                console.log('WebSocket открыто');
                reconnectAttempts = 0; // Сбрасываем счетчик при успешном подключении
            };

            ws.current.onmessage = (event) => {
                try {
                    const data: CrashInterface = JSON.parse(event.data);
                    dispatch(setSocketEvent(data));
                } catch (error) {
                    console.error('Ошибка парсинга:', error);
                }
            };

            ws.current.onclose = (event) => {
                console.log('WebSocket закрыто', {
                    code: event.code,
                    reason: event.reason,
                    wasClean: event.wasClean
                });

                // Экспоненциальныйbackoff для реконнекта
                if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
                    const timeout = Math.pow(2, reconnectAttempts) * 1000;

                    setTimeout(() => {
                        reconnectAttempts++;
                        connectWebSocket();
                    }, timeout);
                } else {
                    console.error('Превышено максимальное количество попыток переподключения');
                }
            };

            ws.current.onerror = (error) => {
                console.error('Ошибка WebSocket:', error);
            };
        };

        connectWebSocket();

        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, []);

    const sendBet = useCallback((gameId: number, user: string, bet: number) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                "game_id": gameId,
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
    }, [dispatch, queryClient, socketEvent.game_id]);

    const withdrawBet = useCallback((gameId: number, user: string, multiplier: number) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                "game_id": gameId,
                "player_id": user,
                "multiplier": multiplier
            }))
            dispatch(setIsBetSet(false))
        } else {
            console.error('WebSocket соединение не открыто');
        }
    }, [dispatch])

    return (
        <>
            <div className={styles.info}>
                <button className={styles.infoBtn} onClick={() => dispatch(setIsModalOpen(true))}>Как играть?</button>
            </div>
            <div className={styles.game}>
                <div className={styles.graph}>
                    <div className={'relative w-full h-full'}>
                        <div className={styles.graph__game}>
                            {/*<GameBg/>*/}
                            <CrashMultiplier multiplier={socketEvent.multiplier} status={socketEvent.status}/>
                            <Rows/>
                            <Game status={socketEvent.status}/>
                        </div>
                        {socketEvent.status === 'Pending' && <CrashTimer timer={socketEvent.timer}/>}
                    </div>
                    <History/>
                </div>
                <div className={styles.players}>
                    <div className={styles.choose__filter}>
                        <h5 className={styles.players__title}>Ставки</h5>
                    </div>
                    <Players crashUsersBets={socketEvent.users_bets}/>
                </div>
            </div>
            <BottomMenu crashUsersBets={socketEvent.users_bets} sendBet={sendBet} withdrawBet={withdrawBet}/>
        </>
    );
};

export default Kostil;

