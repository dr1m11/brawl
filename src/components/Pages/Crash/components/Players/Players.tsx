'use client'
import PlayersList from "@/components/Pages/Crash/components/PlayersList/PlayersList";
import styles from '../Kostil/Kostil.module.css'
import {memo, useLayoutEffect, useState} from "react";
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
    timer: number
    users_bets: TUsersBets[] | null
}

const Players = () => {
    const [crashUsersBets, setCrashUsersBets] = useState<TUsersBets[]>([])

    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        const socket = new WebSocket(`${SOCKET_API_URL}/crash`)

        socket.onmessage = (event) => {
            const data: ICrashSocket = JSON.parse(event?.data)
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
        }

        console.log('on mount')

        return () => {
            socket.close()
        }
    }, []);

    useLayoutEffect(() => {
        const fetchInitialBets = async () => {
            try {
                const {data} = await axios.get(`${API_URL}/crash/init-bets-for-new-client`)
                setCrashUsersBets(data?.bets)
            } catch (error) {
                console.error('Failed to fetch initial bets:', error)
            }
        }
        fetchInitialBets()
    }, []);

    return (
        <>
            <PlayersList bets={crashUsersBets ?? []}/>
            <h5 className={styles.bets__count}>Всего {crashUsersBets?.length} ставок</h5>
        </>
    );
};

export default memo(Players);