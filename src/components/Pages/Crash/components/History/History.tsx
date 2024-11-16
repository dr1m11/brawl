'use client'
import styles from './History.module.css'
import localFont from "next/font/local";
import clsx from "clsx";
import {memo, useEffect} from "react";
import useWebsocket from "react-use-websocket";
import {useQueryClient} from "@tanstack/react-query";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {SOCKET_API_URL} from "@/constants";
import {setHistory, setIsBetSet, setSocketEvent, setUsersBets} from "@/lib/crashSlice/crashSlice";
import {axiosClassic} from "@/api/axios";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

interface CrashInterface {
    status: "Running" | "Crashed" | "Pending"
    multiplier: number
    time_before_start: number,
    length: number,
    rotate: number,
    game_id: number,
}

const History = () => {
    function getColorByMultiplier(mult) {
        if (mult >= 10) {
            return '#e0b700'
        } else if (mult >= 5) {
            return '#e03400'
        } else if (mult >= 2) {
            return '#008ae0'
        } else if (mult >= 1.5) {
            return '#00e013'
        } else {
            return '#2200425E'
        }
    }

    const history = useAppSelector(state => state.crash.history)

    const {lastMessage, sendMessage, readyState} = useWebsocket(`${SOCKET_API_URL}/crash`)

    const queryClient = useQueryClient()

    const dispatch = useAppDispatch()

    const user = useAppSelector(state => state.user.id)

    const {
        socketEvent,
        isAutoBet,
        isAutoWithdraw,
        isBetSet,
        usersBets,
        bet
    } = useAppSelector(state => state.crash)

    useEffect(() => {
        if (!lastMessage) return
        const data = JSON.parse(lastMessage.data)
        if (data.bets === null || data.bets) {
            dispatch(setUsersBets(data.bets))
        } else {
            const mainData: CrashInterface = data
            dispatch(setSocketEvent(mainData))
        }
    }, [lastMessage]);

    useEffect(() => {
        queryClient.invalidateQueries({
            queryKey: ['user']
        })
        axiosClassic.get('/all-crash-records').then(data => dispatch(setHistory(data.data)))
        if ((socketEvent.status === "Pending") && (!isAutoBet)) {
            dispatch(setIsBetSet(false))
        }
    }, [socketEvent.status]);

    return (
        <div className={styles.history}>
            {
                history.map(({id, win_multiplier}) => (
                    <div
                        key={id}
                        className={clsx(styles.history__item, daysOne.className)}
                        style={{background: getColorByMultiplier(+win_multiplier)}}
                    >
                        {(+win_multiplier).toFixed(2)}
                    </div>
                ))
            }
        </div>
    );
};

export default memo(History);