'use client'
import styles from "./BetButton.module.css";
import localFont from "next/font/local";
import { useAppSelector} from "@/lib/hooks";
import {useMemo} from "react";
import PriceIcon from "@/components/PriceIcon/PriceIcon";


const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

const BetButton = () => {
    const {bet, isBetSet, socketEvent, usersBets} = useAppSelector(state => state.crash)
    const {id, balance} = useAppSelector(state => state.user)
    const isUserBet = useMemo(() => {
        return usersBets && usersBets.find(item => item.player_id === id)
    }, [id, usersBets])

    // const {sendMessage} = useWebsocket(`${SOCKET_API_URL}/crash`, {
    //     share: true
    // })
    //
    // const dispatch = useAppDispatch()
    //
    // const queryClient = useQueryClient()

    const sendBet = () => {
        // sendMessage(JSON.stringify({
        //     "game_id": socketEvent.game_id,
        //     "player_id": id,
        //     "amount": bet
        // }))
        // dispatch(setIsBetSet(true))
        // queryClient.invalidateQueries({
        //     queryKey: ['user']
        // })
    };

    const withdrawBet = () => {
        // sendMessage(JSON.stringify({
        //     "game_id": socketEvent.game_id,
        //     "player_id": id,
        //     "multiplier": socketEvent.multiplier
        // }))
        // dispatch(setIsBetSet(false))
    };

    return (
        <button
            className={!isBetSet ? styles.bet__btn : styles.withdraw}
            onClick={!isBetSet ? sendBet : withdrawBet}
            disabled={(!(socketEvent.status === "Pending") && !isBetSet) || !(+(balance ?? 0)) || (+(balance ?? 0) < +bet)}
            style={{
                background: (isUserBet && !isBetSet) ? "green" : undefined,
                borderColor: (isUserBet && !isBetSet) ? "green" : undefined
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