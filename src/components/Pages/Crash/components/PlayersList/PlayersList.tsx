'use client'
import styles from './PlayersList.module.css'
import {memo, useEffect} from "react";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {API_URL} from "@/constants";
import {setUsersBets} from "@/lib/crashSlice/crashSlice";
import Player from "@/components/CrashPlayer/Player";

const PlayersList = () => {
    const dispatch = useAppDispatch()

    const bets = useAppSelector(state => state.crash.usersBets)

    useEffect(() => {
        const fetchInitialBets = async () => {
            try {
                const { data } = await axios.get(`${API_URL}/crash/init-bets-for-new-client`)
                dispatch(setUsersBets(data.bets))
            } catch (error) {
                console.error('Failed to fetch initial bets:', error)
            }
        }
        fetchInitialBets()
    }, [dispatch]);

    return (
        <div className={styles.players__list}>
            {bets?.map(({winning, player_nickname, amount, user_multiplier, player_photo}, index) => (
                <Player 
                    key={`${player_nickname}-${index}`}
                    nickname={player_nickname} 
                    amount={amount} 
                    winning={winning} 
                    multiplier={user_multiplier} 
                    photo={player_photo}
                />
            ))}
        </div>
    );
};

export default memo(PlayersList);