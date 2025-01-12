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
import {useQueryClient} from "@tanstack/react-query";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

const Kostil = () => {

    const ws = useRef<WebSocket>(null)

    const {user, bet, socketEvent, userCell} = useAppSelector(state => state.wheel)
    const main_amount = useAppSelector(state => state.wheel.userBets.main_amount)
    const dispatch = useAppDispatch()

    const queryClient = useQueryClient()

    useEffect(() => {
        dispatch(setUser(localStorage.getItem('userId')))
        axios.get(`${API_URL}/roulette/init-bets-for-new-client`)
            .then(data => dispatch(setUserBets(data.data)))
    }, []);

    useEffect(() => {
        if (socketEvent.status === "Pending") {
            dispatch(setIsBetSet(false))
            queryClient.invalidateQueries({
                queryKey: ['user']
            })
        }
        axiosClassic.get('/all-roulette-records').then(data => {
            dispatch(setHistory(data.data))
        })
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
            ws.current = new WebSocket(`${SOCKET_API_URL}/roulette`);

            ws.current.onopen = () => {
                console.log('WebSocket Roulette открыто');
                reconnectAttempts = 0; // Сбрасываем счетчик при успешном подключении
            };

            ws.current.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    if (data.main_amount === 0 || data.main_amount) {
                        dispatch(setUserBets(data));
                    } else {
                        dispatch(setSocketEvent(data));
                    }
                } catch (error) {
                    console.error('Ошибка парсинга данных:', error);
                }
            };

            ws.current.onclose = (event) => {
                console.log('WebSocket Roulette закрыто', {
                    code: event.code,
                    reason: event.reason,
                    wasClean: event.wasClean
                });

                // Экспоненциальный backoff для реконнекта
                if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
                    const timeout = Math.pow(2, reconnectAttempts) * 1000;

                    setTimeout(() => {
                        reconnectAttempts++;
                        connectWebSocket();
                    }, timeout);
                } else {
                    console.error('Превышено максимальное количество попыток переподключения для Roulette');
                }
            };

            ws.current.onerror = (error) => {
                console.error('Ошибка WebSocket Roulette:', error);
            };
        };

        // Добавляем механизм проверки живости соединения
        let pingInterval: NodeJS.Timeout;

        const startPingInterval = () => {
            pingInterval = setInterval(() => {
                if (ws.current && ws.current.readyState === WebSocket.OPEN) {
                    // Отправка ping-сообщения, если это требуется вашим бэкендом
                    // ws.current.send(JSON.stringify({ type: 'ping' }));
                }
            }, 30000); // Ping каждые 30 секунд
        };

        connectWebSocket();
        startPingInterval();

        return () => {
            // Очищаем интервал
            if (pingInterval) {
                clearInterval(pingInterval);
            }

            // Закрываем соединение
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
                "amount": +((+bet).toFixed(0)),
                "cell": userCell
            }))
            dispatch(setIsBetSet(true))
            queryClient.invalidateQueries({
                queryKey: ['user']
            })
        } else {
            console.error('WebSocket соединение не открыто');
        }
    };


    return (
        <>
            <div className={styles.game}>
                <button className={styles.infoBtn} onClick={() => dispatch(setIsModalOpen(true))}>Как играть?
                </button>
                <div className={styles.game__label}>
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