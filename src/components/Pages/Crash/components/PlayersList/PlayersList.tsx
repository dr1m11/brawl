'use client'
import styles from './PlayersList.module.css'
import Player from "@/components/CrashPlayer/Player";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {PlayerInterface, setUsersBets} from "@/lib/crashSlice/crashSlice";
import {memo, useEffect} from "react";
import axios from "axios";
import {API_URL} from "@/constants";

const PlayersList = () => {
    const dispatch = useAppDispatch()

    const bets = useAppSelector(state => state.crash.usersBets)

    useEffect(() => {
        axios.get(`${API_URL}/crash/init-bets-for-new-client`)
            .then(data => dispatch(setUsersBets(data.data.bets)))
    }, []);
    return (
        <div className={styles.players__list}>
            {
                !!bets &&
                bets.map(({winning, player_nickname, amount, user_multiplier}, index) => (
                    <Player key={index} nickname={player_nickname} amount={amount} winning={winning} multiplier={user_multiplier}/>
                ))
            }
        </div>
    );
};

export default memo(PlayersList);