import styles from './PlayersList.module.css'
import {memo} from "react";
import Player from "@/components/CrashPlayer/Player";

interface IProps {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    bets: any[]
}

const PlayersList = ({bets}: IProps) => {

    return (
        <div 
            className={styles.players__list}
            style={{
                transform: 'translate3d(0,0,0)',
                willChange: 'transform',
                contain: 'content'
            }}
        >
            {bets?.map(({winning, player_nickname, amount, user_multiplier, player_photo}, index) => (
                <Player
                    key={`${player_nickname}-${index}-${amount}`}
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

export default memo(PlayersList, (prevProps, nextProps) => {
    return JSON.stringify(prevProps.bets) === JSON.stringify(nextProps.bets);
});