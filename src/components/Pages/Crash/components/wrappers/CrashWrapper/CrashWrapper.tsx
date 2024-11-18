'use client'
import clsx from "clsx";
import styles from './CrashWrapper.module.css'
import Image from "next/image";
import BG from "@/../public/Crash/BG.png";
import {ReactNode, useEffect} from "react";
import {Manrope} from "next/font/google";
import InfoModal from "../../../modals/info/infoModal";
import useWebsocket from "react-use-websocket";
import {SOCKET_API_URL} from "@/constants";
import {useQueryClient} from "@tanstack/react-query";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setHistory, setIsBetSet, setSocketEvent, setUsersBets} from "@/lib/crashSlice/crashSlice";
import {axiosClassic} from "@/api/axios";

const manrope = Manrope({subsets: ['latin', 'cyrillic'], weight: ['300', '400', '500']})

interface CrashInterface {
    status: "Running" | "Crashed" | "Pending"
    multiplier: number
    time_before_start: number,
    length: number,
    game_id: number,
    new_game_start_time?: Date
}

const CrashWrapper = ({children}: { children: ReactNode }) => {

    const {lastMessage} = useWebsocket(`${SOCKET_API_URL}/crash`, {
        share: true,
        shouldReconnect: () => true,
    })

    const queryClient = useQueryClient()

    const dispatch = useAppDispatch()

    const {
        socketEvent,
        isAutoBet,
        usersBets
    } = useAppSelector(state => state.crash)

    useEffect(() => {
        if (!lastMessage) return
        
        const data = JSON.parse(lastMessage.data)
        
        switch (true) {
            case !!data?.player_id:
                dispatch(setUsersBets([...usersBets, data]))
                break;
            case !!data?.new_game_start_time:
                dispatch(setSocketEvent({
                    ...socketEvent,
                    new_game_start_time: data.new_game_start_time,
                    status: 'Pending',
                    game_id: data.game_id
                }))
                break;
            case data?.bets === null:
                dispatch(setUsersBets([]))
                break;
            default:
                dispatch(setSocketEvent(data))
        }
    }, [lastMessage, dispatch]);

    useEffect(() => {
        if (socketEvent.status === "Pending" && !isAutoBet) {
            dispatch(setIsBetSet(false))
            dispatch(setUsersBets([]))
        }
        
        const updateGameData = async () => {
            await Promise.all([
                queryClient.invalidateQueries(['user']),
                axiosClassic.get('/all-crash-records')
                    .then(data => dispatch(setHistory(data.data)))
            ])
        }
        
        updateGameData()
    }, [socketEvent.status]);

    return (
        <>
            <div className={clsx(styles.root, manrope.className)}>
                <Image src={BG} alt={'Background'} width={1435} height={876} className={styles.bg} quality={100}/>
                <div className={styles.shadow__left}/>
                <div className={styles.shadow__right}/>
                <div className={styles.wrapper}>
                    {children}
                </div>
            </div>
            <InfoModal/>
        </>
    );
};

export default CrashWrapper;