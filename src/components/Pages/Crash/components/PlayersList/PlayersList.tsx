import styles from './PlayersList.module.css'
import {memo, useMemo} from "react";
import Player from "@/components/CrashPlayer/Player";

interface Bet {
    winning: number;
    player_nickname: string;
    amount: number;
    user_multiplier: number;
    player_photo: number;
}

interface IProps {
    bets: Bet[];
}

const PlayersList = ({bets}: IProps) => {

    const playerList = useMemo(() =>
            bets.map(({winning, player_nickname, amount, user_multiplier, player_photo}, index) => (
                <Player
                    key={player_nickname || index} // Используем уникальный идентификатор
                    nickname={player_nickname}
                    amount={amount}
                    winning={winning}
                    multiplier={user_multiplier}
                    photo={player_photo}
                />
            )),
        [bets]
    );

    return (
        <div 
            className={styles.players__list}
            style={{
                transform: 'translate3d(0,0,0)',
                willChange: 'transform',
                contain: 'content'
            }}
        >
            {playerList}
        </div>
    );
};

export default memo(PlayersList, (prevProps, nextProps) => {
    if (prevProps.bets.length !== nextProps.bets.length) return false;

    return prevProps.bets.every((bet, index) =>
        bet.player_nickname === nextProps.bets[index].player_nickname &&
        bet.amount === nextProps.bets[index].amount &&
        bet.winning === nextProps.bets[index].winning &&
        bet.user_multiplier === nextProps.bets[index].user_multiplier
    );
});