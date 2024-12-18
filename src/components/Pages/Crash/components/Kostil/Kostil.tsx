'use client'
import styles from './Kostil.module.css'
import Game from "../Game/Game";
import History from "../History/History";
import Players from "@/components/Pages/Crash/components/Players/Players";
import {useEffect, useRef} from "react";
import {TUsersBets} from "@/lib/crashSlice/crashUserBets";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {API_URL, SOCKET_API_URL} from "@/constants";
import axios from "axios";
import {CrashMultiplier} from "@/components/Pages/Crash/components/multiplier/multiplier";
import Rows from "@/components/Pages/Crash/components/Rows/Rows";
import CrashTimer from "@/components/Pages/Crash/components/timer/timer";
import {axiosClassic} from "@/api/axios";
import {setHistory, setIsBetSet, setSocketEvent, setUser, setUsersBets} from "@/lib/crashSlice/crashSlice";
import {useQueryClient} from "@tanstack/react-query";

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
        // user,
        // bet,
        usersBets
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
        // Создание WebSocket соединения при монтировании компонента
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ws.current = new WebSocket(`${SOCKET_API_URL}/crash`);

        ws.current.onopen = () => {
            console.log('WebSocket открыто');
        };

        ws.current.onmessage = (event) => {
            const data: CrashInterface = JSON.parse(event.data)
            dispatch(setSocketEvent(data))
        };

        ws.current.onclose = () => {
            console.log('WebSocket закрыто');
        };

        ws.current.onerror = (error) => {
            console.error('Ошибка WebSocket:', error);
        };

        return () => {
            if (ws.current) {
                if ('close' in ws.current) {
                    ws.current.close();
                }
            }
        };
    }, []);

    // const sendBet = () => {
    //     if (ws.current && ws.current.readyState === WebSocket.OPEN) {
    //         ws.current.send(JSON.stringify({
    //             "game_id": socketEvent.game_id,
    //             "player_id": user,
    //             "amount": bet
    //         }))
    //         dispatch(setIsBetSet(true))
    //         queryClient.invalidateQueries({
    //             queryKey: ['user']
    //         })
    //     } else {
    //         console.error('WebSocket соединение не открыто');
    //     }
    // };
    //
    // const withdrawBet = () => {
    //     if (ws.current && ws.current.readyState === WebSocket.OPEN) {
    //         ws.current.send(JSON.stringify({
    //             "game_id": socketEvent.game_id,
    //             "player_id": user,
    //             "multiplier": socketEvent.multiplier
    //         }))
    //         dispatch(setIsBetSet(false))
    //     } else {
    //         console.error('WebSocket соединение не открыто');
    //     }
    // };

    return (
        <>
            {/*<div className={styles.info}>*/}
            {/*    /!*<button className={styles.infoBtn} onClick={() => dispatch(setIsModalOpen(true))}>Как играть?</button>*!/*/}
            {/*</div>*/}
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
                    <Players crashUsersBets={usersBets}/>
                </div>
            </div>
            {/*<BottomMenu crashUsersBets={crashUsersBets}/>*/}
        </>
    );
};

export default Kostil;

