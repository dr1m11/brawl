'use client'
import styles from './PlayersList.module.css'
import Player from "@/components/CrashPlayer/Player";
import {useAppSelector} from "@/lib/hooks";
import {PlayerInterface} from "@/lib/crashSlice/crashSlice";
import {memo} from "react";

interface IPlayersListProps {
    bets: {
        bets: PlayerInterface[]
    }
}

const PlayersList = ({bets}: IPlayersListProps) => {
    console.log(bets.bets)
    return (
        <div className={styles.players__list}>
            {
                (!!bets.bets && typeof bets === 'object') &&
                bets.bets.map(({winning, player_nickname, amount, user_multiplier}, index) => (
                    <Player key={index} nickname={player_nickname} amount={amount} winning={winning} multiplier={user_multiplier}/>
                ))
            }
        </div>
    );
};

export default memo(PlayersList);