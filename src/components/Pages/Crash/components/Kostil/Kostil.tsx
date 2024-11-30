'use client'
import styles from './Kostil.module.css'
import Game from "../Game/Game";
import History from "../History/History";
import BetButton from "@/components/Pages/Crash/components/BetButton/BetButton";
import BetTips from "@/components/Pages/Crash/components/BetTips/BetTips";
import BetCounter from "@/components/Pages/Crash/components/BetCounter/BetCounter";
import Players from "@/components/Pages/Crash/components/Players/Players";
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
import BetMenu from "@/components/Pages/Crash/components/betMenu/betMenu";
import BottomMenu from "@/components/Pages/Crash/components/bottomMenu/bottomMenu";

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
    const dispatch = useAppDispatch()

    const {socket} = useWebSocket()

    const handleSocketMessage = useCallback((event: MessageEvent) => {
        const data: ICrashSocket = JSON.parse(event.data)
        const {
            game_id,
            multiplier,
            status,
            timer,
            users_bets
        } = data

        setStatus(status)
        dispatch(setGameId(game_id))
        dispatch(setMultiplier(multiplier))
        setCrashTimer(timer ?? '')
        setCrashUsersBets(users_bets ?? []);
    }, [])

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
                    <Players crashUsersBets={crashUsersBets}/>
                </div>
            </div>
            {/*<BottomMenu crashUsersBets={crashUsersBets}/>*/}
        </>
    );
};

export default memo(Kostil);

