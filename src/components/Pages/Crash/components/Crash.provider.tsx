'use client'
import {PropsWithChildren, useEffect, useState} from "react";
import useWebsocket from "react-use-websocket";
import {API_URL, SOCKET_API_URL} from "@/constants";
import {useAppDispatch} from "@/lib/hooks";
import axios from "axios";
import {setGameId} from "@/lib/crashSlice/crashGameIdSlice";
import {setMultiplier} from "@/lib/crashSlice/crashMultiplierSlice";
import {setStatus} from "@/lib/crashSlice/crashStatusSlice";
import {setTimer} from "@/lib/crashSlice/crashTimerSlice";
import {setUsersBets, TUsersBets} from "@/lib/crashSlice/crashUserBets";

interface ICrashSocket {
    game_id: number
    multiplier: number
    status: 'Pending' | 'Running' | 'Crashed'
    timer: number
    users_bets: TUsersBets[] | null
}

export const CrashProvider = ({children}: PropsWithChildren) => {
    const [crashGameId, setCrashGameId] = useState<number>()
    const [crashMultiplier, setCrashMultiplier] = useState<number>()
    const [crashStatus, setCrashStatus] = useState<'Pending' | 'Running' | 'Crashed'>()
    const [crashTimer, setCrashTimer] = useState<number>()
    const [crashUsersBets, setCrashUsersBets] = useState<TUsersBets[] | null>()


    useWebsocket(`${SOCKET_API_URL}/crash`, {
        share: true,
        shouldReconnect: () => true,
        reconnectInterval: 3000,
        reconnectAttempts: 10,
        onMessage: (event) => {
            const data: ICrashSocket = JSON.parse(event?.data)
            const {
                game_id,
                multiplier,
                status,
                timer,
                users_bets
            } = data

            if (status !== crashStatus) {
                setCrashStatus(status)
                dispatch(setStatus(status))
            }

            if (game_id !== crashGameId) {
                setCrashGameId(game_id)
                dispatch(setGameId(game_id))
            }

            if (multiplier !== crashMultiplier) {
                setCrashMultiplier(multiplier)
                dispatch(setMultiplier(multiplier))
            }

            if (timer !== crashTimer) {
                setCrashTimer(timer)
                dispatch(setTimer(timer ?? ''))
            }

            if (users_bets && (!crashUsersBets || JSON.stringify(users_bets) !== JSON.stringify(crashUsersBets))) {
                setCrashUsersBets(users_bets)
                dispatch(setUsersBets(users_bets))
            }
        }
    })

    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchInitialBets = async () => {
            try {
                const { data } = await axios.get(`${API_URL}/crash/init-bets-for-new-client`)
                dispatch(setUsersBets(data?.bets))
            } catch (error) {
                console.error('Failed to fetch initial bets:', error)
            }
        }
        fetchInitialBets()
    }, []);

    return children
}