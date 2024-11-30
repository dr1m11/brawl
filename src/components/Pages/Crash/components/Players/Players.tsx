'use client'
import PlayersList from "@/components/Pages/Crash/components/PlayersList/PlayersList";
import styles from '../Kostil/Kostil.module.css'
import {memo, useCallback, useLayoutEffect, useState} from "react";
import {useAppDispatch} from "@/lib/hooks";
import {TUsersBets} from "@/lib/crashSlice/crashUserBets";
import {API_URL, SOCKET_API_URL} from "@/constants";
import {setStatus} from "@/lib/crashSlice/crashStatusSlice";
import {setGameId} from "@/lib/crashSlice/crashGameIdSlice";
import {setMultiplier} from "@/lib/crashSlice/crashMultiplierSlice";
import {setTimer} from "@/lib/crashSlice/crashTimerSlice";
import axios from "axios";


interface ICrashSocket {
    game_id: number
    multiplier: number
    status: 'Pending' | 'Running' | 'Crashed'
    timer: string
    users_bets: TUsersBets[]
}

const Players = () => {
    const [crashUsersBets, setCrashUsersBets] = useState<TUsersBets[]>([])
    const dispatch = useAppDispatch()

    const handleSocketMessage = useCallback((event: MessageEvent) => {
        const data: ICrashSocket = JSON.parse(event.data)
        const {
            game_id,
            multiplier,
            status,
            timer,
            users_bets
        } = data

        dispatch(setStatus(status))
        dispatch(setGameId(game_id))
        dispatch(setMultiplier(multiplier))
        dispatch(setTimer(timer ?? ''))
        setCrashUsersBets(users_bets ?? []);
    }, [])

    useLayoutEffect(() => {
        const socket = new WebSocket(`${SOCKET_API_URL}/crash`)

        // Fetch initial bets
        const fetchInitialBets = async () => {
            try {
                const {data} = await axios.get(`${API_URL}/crash/init-bets-for-new-client`)
                setCrashUsersBets(data?.bets)
            } catch (error) {
                console.error('Failed to fetch initial bets:', error)
            }
        }

        socket.onopen = () => {
            fetchInitialBets()
        }

        socket.onmessage = handleSocketMessage

        return () => {
            socket.close()
        }
    }, []);

    return (
        <>
            <PlayersList bets={crashUsersBets}/>
            <h5 className={styles.bets__count}>
                Всего {crashUsersBets.length} ставок
            </h5>
        </>
    );
};

export default memo(Players);