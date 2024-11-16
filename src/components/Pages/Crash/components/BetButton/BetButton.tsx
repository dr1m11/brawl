'use client'
import styles from "./BetButton.module.css";
import localFont from "next/font/local";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {useMemo} from "react";
import PriceIcon from "@/components/PriceIcon/PriceIcon";
import useWebsocket from "react-use-websocket";
import {SOCKET_API_URL} from "@/constants";
import {useQueryClient} from "@tanstack/react-query";
import {setIsBetSet} from "@/lib/crashSlice/crashSlice";


const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

const BetButton = () => {
    const {bet, isBetSet, socketEvent, usersBets} = useAppSelector(state => state.crash)
    const {id, balance} = useAppSelector(state => state.user)
    const isUserBet = useMemo(() => {
        return usersBets && usersBets.find(item => item.player_id === id)
    }, [usersBets])

    const {sendMessage} = useWebsocket(`${SOCKET_API_URL}/crash`, {
        share: true
    })

    const dispatch = useAppDispatch()

    const queryClient = useQueryClient()

    const sendBet = () => {
        sendMessage(JSON.stringify({
            "game_id": socketEvent.game_id,
            "player_id": id,
            "amount": bet
        }))
        dispatch(setIsBetSet(true))
        queryClient.invalidateQueries({
            queryKey: ['user']
        })
    };

    const withdrawBet = () => {
        sendMessage(JSON.stringify({
            "game_id": socketEvent.game_id,
            "player_id": id,
            "multiplier": socketEvent.multiplier
        }))
        dispatch(setIsBetSet(false))
    };

    return (
        <button
            className={!isBetSet ? styles.bet__btn : styles.withdraw}
            onClick={!isBetSet ? sendBet : withdrawBet}
            disabled={(!(socketEvent.status === "Pending") && !isBetSet) || !(+balance) || (+balance < +bet)}
            style={{
                background: (isUserBet && !isBetSet) && "green",
                borderColor: (isUserBet && !isBetSet) && "green"
            }}
        >
            <h5 className={daysOne.className}>{!isBetSet ? "СТАВКА" : "ВЫВОД"}</h5>
            <span
                className={styles.bet__btn__label}>{(isBetSet && socketEvent.status === "Running") ? (bet * socketEvent.multiplier).toFixed(0) : bet}
                <PriceIcon/></span>
        </button>
    );
};

export default BetButton;