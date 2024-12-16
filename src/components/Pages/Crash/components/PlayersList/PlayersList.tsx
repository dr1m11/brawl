import styles from './PlayersList.module.css';
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

const PlayersList = ({ bets }: IProps) => {

    return (
        <div
            className={styles.players__list}
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            {
                bets.map((bet) => (
                    <Player
                        key={bet.player_nickname}
                        nickname={bet.player_nickname}
                        amount={bet.amount}
                        winning={bet.winning}
                        multiplier={bet.user_multiplier}
                        photo={bet.player_photo}
                    />
                ))
            }
        </div>
    );
};

export default PlayersList