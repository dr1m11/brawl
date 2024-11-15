'use client'
import styles from './Kostil.module.css'
import Game from "@/components/Pages/Crash/components/Game/Game";
import PlayersList from "@/components/Pages/Crash/components/PlayersList/PlayersList";
import BetCounter from "@/components/Pages/Crash/components/BetCounter/BetCounter";
import BetTips from "@/components/Pages/Crash/components/BetTips/BetTips";
import {useAppDispatch, useAppSelector, useAppStore} from "@/lib/hooks";
import {useEffect, useRef, useState} from "react";
import {
    PlayerInterface,
    setIsBetSet,
    setIsModalOpen,
    setSocketEvent,
    setUsersBets
} from "@/lib/crashSlice/crashSlice";
import BetButton from "@/components/Pages/Crash/components/BetButton/BetButton";
import {useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {API_URL, SOCKET_API_URL} from "@/constants";
import {axiosClassic} from "@/api/axios";
import History from "@/components/Pages/Crash/components/History/History";


interface CrashInterface {
    status: "Running" | "Crashed" | "Pending"
    multiplier: number
    time_before_start: number,
    length: number,
    rotate: number,
    game_id: number,
}

interface IHistory {
    id: number
    win_multiplier: number | string
}

const Kostil = () => {
    const dispatch = useAppDispatch()

    const ws = useRef(null)

    const user = useAppSelector(state => state.user.id)

    const [multiplier, setMultiplier] = useState('2')
    const [history, setHistory] = useState<IHistory[]>([])
    const [userBets, setUserBets] = useState<PlayerInterface[]>([])
    const [bet, setBet] = useState(0)

    const {
        socketEvent,
        isAutoBet,
        isAutoWithdraw,
        isBetSet,
        usersBets
    } = useAppSelector(state => state.crash)

    useEffect(() => {
        axios.get(`${API_URL}/crash/init-bets-for-new-client`)
            .then(data => setUserBets(data.data.bets))
    }, []);

    const queryClient = useQueryClient()

    useEffect(() => {
        queryClient.invalidateQueries({
            queryKey: ['user']
        })
        axiosClassic.get('/all-crash-records').then(data => setHistory(data.data))
        if ((socketEvent.status === "Pending") && (!isAutoBet)) {
            dispatch(setIsBetSet(false))
        }
    }, [socketEvent.status]);

    useEffect(() => {
        if ((socketEvent.multiplier >= +multiplier) && (socketEvent.status === 'Running') && isAutoWithdraw && isBetSet) {
            withdrawBet()
            console.log('with')
        }
    }, [socketEvent.multiplier]);

    useEffect(() => {
        // Создание WebSocket соединения при монтировании компонента
        ws.current = new WebSocket(`${SOCKET_API_URL}/crash`);

        ws.current.onopen = () => {
            console.log('WebSocket открыто');
        };

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data)
            if (data.bets === null || data.bets) {
                dispatch(setUsersBets(data.bets))
            } else {
                const mainData: CrashInterface = data
                dispatch(setSocketEvent(mainData))
            }
        };

        ws.current.onclose = () => {
            console.log('WebSocket закрыто');
        };

        ws.current.onerror = (error) => {
            console.error('Ошибка WebSocket:', error);
        };

        return () => {
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
                "amount": bet
            }))
            dispatch(setIsBetSet(true))
            queryClient.invalidateQueries({
                queryKey: ['user']
            })
        } else {
            console.error('WebSocket соединение не открыто');
        }
    };

    const withdrawBet = () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                "game_id": socketEvent.game_id,
                "player_id": user,
                "multiplier": socketEvent.multiplier
            }))
            dispatch(setIsBetSet(false))
        } else {
            console.error('WebSocket соединение не открыто');
        }
    };

    useEffect(() => {
        if (isAutoBet && bet && (socketEvent.status === 'Pending')) {
            sendBet()
        }
    }, [socketEvent.status]);

    return (
        <>
            <div className={styles.info}>
                <button className={styles.infoBtn} onClick={() => dispatch(setIsModalOpen(true))}>Как играть?</button>
            </div>
            <div className={styles.game}>
            <div className={styles.graph}>
                    <Game
                        // length={socketEvent.length}
                        status={socketEvent.status}
                        time_before_start={socketEvent.time_before_start}
                        multiplier={socketEvent.multiplier}
                    />
                    <History
                        history={history}
                    />
                </div>
                <div className={styles.players}>
                    <div className={styles.choose__filter}>
                        <h5 className={styles.players__title}>Ставки</h5>
                    </div>
                    <PlayersList bets={userBets} />
                    <h5 className={styles.bets__count}>Всего {usersBets ? usersBets.length : 0} ставок</h5>
                </div>
            </div>
            <div className={styles.bottom_menu}>
                <div className={styles.bet}>
                    <BetCounter bet={bet} setBet={setBet}/>
                    <BetTips/>
                    <BetButton onClick={!isBetSet ? sendBet : withdrawBet}/>
                </div>
                <div className={styles.playersVisible}>
                    <div className={styles.choose__filter}>
                        <h5 className={styles.players__title}>Ставки</h5>
                    </div>
                    <PlayersList bets={userBets}/>
                    <h5 className={styles.bets__count}>Всего {usersBets ? usersBets.length : 0} ставок</h5>
                </div>
            </div>
        </>
    );
};

export default Kostil;

