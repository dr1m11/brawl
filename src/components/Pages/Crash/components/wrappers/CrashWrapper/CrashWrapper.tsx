'use client'
import clsx from "clsx";
import styles from './CrashWrapper.module.css'
import Image from "next/image";
import BG from "@/../public/Crash/BG.png";
import {ReactNode, useEffect, memo} from "react";
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

const CrashWrapper = memo(({children}: { children: ReactNode }) => {

    const {lastMessage} = useWebsocket(`${SOCKET_API_URL}/crash`, {
        share: true,
        shouldReconnect: () => true,
        reconnectInterval: 3000,
        reconnectAttempts: 10,
    })

    const queryClient = useQueryClient()

    const dispatch = useAppDispatch()

    const {
        socketEvent,
        isAutoBet,
        usersBets
    } = useAppSelector(
        state => ({
            socketEvent: state.crash.socketEvent,
            isAutoBet: state.crash.isAutoBet,
            usersBets: state.crash.usersBets
        }),
        (prev, next) => {
            return prev.socketEvent === next.socketEvent &&
                   prev.isAutoBet === next.isAutoBet &&
                   prev.usersBets === next.usersBets;
        }
    )

    useEffect(() => {
        if (!lastMessage?.data) return;

        try {
            const data = JSON.parse(lastMessage.data);
            
            if (data?.player_id) {
                dispatch(setUsersBets([...usersBets, data]));
            } else if (data?.new_game_start_time) {
                dispatch(setSocketEvent({
                    ...socketEvent,
                    new_game_start_time: data.new_game_start_time,
                    status: 'Pending',
                    game_id: data.game_id
                }));
            } else if (data?.bets === null) {
                dispatch(setUsersBets([]));
            } else {
                dispatch(setSocketEvent(data));
            }
        } catch (error) {
            console.error('Error parsing socket message:', error);
        }
    }, [lastMessage]);

    useEffect(() => {
        if (socketEvent.status !== "Pending" || isAutoBet) return;

        dispatch(setIsBetSet(false));
        dispatch(setUsersBets([]));

        const updateGameData = async () => {
            try {
                const [, crashRecords] = await Promise.all([
                    queryClient.invalidateQueries({
                        queryKey: ['user']
                    }),
                    axiosClassic.get('/all-crash-records')
                ]);
                dispatch(setHistory(crashRecords.data));
            } catch (error) {
                console.error('Error updating game data:', error);
            }
        };

        updateGameData();
    }, [socketEvent.status]);

    return (
        <>
            <div className={clsx(styles.root, manrope.className)}>
                <Image 
                    src={BG} 
                    alt={'Background'} 
                    width={1435} 
                    height={876} 
                    className={styles.bg} 
                    quality={100}
                    priority
                />
                <div className={styles.shadow__left}/>
                <div className={styles.shadow__right}/>
                <div className={styles.wrapper}>
                    {children}
                </div>
            </div>
            <InfoModal/>
        </>
    );
});

CrashWrapper.displayName = 'CrashWrapper';

export default CrashWrapper;