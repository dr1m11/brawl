'use client'
import styles from './Kostil.module.css'
import Game from "../Game/Game";
import History from "../History/History";
import {memo, useCallback, useLayoutEffect, useState} from "react";
import {useWebSocket} from "@/app/crash/CrashProvider";
import {setGameId} from "@/lib/crashSlice/crashGameIdSlice";
import {setMultiplier} from "@/lib/crashSlice/crashMultiplierSlice";
import {TUsersBets} from "@/lib/crashSlice/crashUserBets";
import {useAppDispatch} from "@/lib/hooks";
import {API_URL} from "@/constants";
import axios from "axios";
import {CrashMultiplier} from "@/components/Pages/Crash/components/multiplier/multiplier";
import Rows from "@/components/Pages/Crash/components/Rows/Rows";
import CrashTimer from "@/components/Pages/Crash/components/timer/timer";
import Player from "@/components/CrashPlayer/Player";

type TStatus = 'Pending' | 'Running' | 'Crashed'

interface ICrashSocket {
    game_id: number
    multiplier: number
    status: TStatus
    timer: string
    users_bets: TUsersBets[]
}

const Kostil = () => {
    // const dispatch = useAppDispatch()
    //
    const [crashUsersBets, setCrashUsersBets] = useState<TUsersBets[]>([])
    const [crashTimer, setCrashTimer] = useState<string>('')
    const [status, setStatus] = useState<TStatus>('Pending')
    const dispatch = useAppDispatch();
    const { socket } = useWebSocket();

    const handleSocketMessage = useCallback((event: MessageEvent) => {
        const data: ICrashSocket = JSON.parse(event.data);
        const {
            game_id,
            multiplier,
            status,
            timer,
            users_bets
        } = data;

        // Используйте функцию обновления с prev state
        setStatus(() => status);
        dispatch(setGameId(game_id));
        dispatch(setMultiplier(multiplier));

        // Обновляйте только если есть изменения
        setCrashTimer(prevTimer => timer ?? prevTimer);
        setCrashUsersBets(prevBets => {
            // Проверка на наличие новых ставок
            if (!users_bets.length) {
                return []
            }

            const newBets = users_bets?.filter(
                newBet => !prevBets.some(
                    prevBet => prevBet.player_nickname === newBet.player_nickname
                )
            ) || [];

            return newBets.length > 0
                ? [...prevBets, ...newBets]
                : prevBets;
        });
    }, [dispatch]);

    useLayoutEffect(() => {
        const fetchInitialBets = async () => {
            try {
                const {data} = await axios.get(`${API_URL}/crash/init-bets-for-new-client`)
                setCrashUsersBets(data?.bets)
            } catch (error) {
                console.error('Failed to fetch initial bets:', error)
            }
        }

        if (socket) {
            socket.onopen = () => {
                fetchInitialBets()
            }

            socket.onmessage = handleSocketMessage
        }
    }, [socket]);

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
                            <CrashMultiplier/>
                            <Rows/>
                            <Game status={status}/>
                        </div>
                        {status === 'Pending' && <CrashTimer timer={crashTimer}/>}
                    </div>
                    <History/>
                </div>
                <div className={styles.players}>
                    <div className={styles.choose__filter}>
                        <h5 className={styles.players__title}>Ставки</h5>
                    </div>
                    {/*<Players crashUsersBets={crashUsersBets}/>*/}
                    <div
                        className={styles.players__list}
                        style={{
                            transform: 'translate3d(0,0,0)',
                            willChange: 'transform',
                            contain: 'layout'  // Более эффективный, чем 'content'
                        }}
                    >
                        {
                            crashUsersBets.map(({ winning, player_nickname, amount, user_multiplier, player_photo }, index) => (
                                <Player
                                    key={`${player_nickname}-${index}`}
                                    nickname={player_nickname}
                                    amount={amount}
                                    winning={winning}
                                    multiplier={user_multiplier}
                                    photo={player_photo}
                                />
                            ))
                        }
                    </div>
                    <h5 className={styles.bets__count}>
                        Всего {crashUsersBets.length} ставок
                    </h5>
                </div>
            </div>
            {/*<BottomMenu crashUsersBets={crashUsersBets}/>*/}
        </>
    );
};

export default memo(Kostil);

