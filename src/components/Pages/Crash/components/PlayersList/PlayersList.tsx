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

const PlayersList = ({ bets }: IProps) => {
    // Используйте useMemo с мемоизацией по длине и хешу массива
    const playerList = useMemo(() => {
        const betsHash = bets.map(bet =>
            `${bet.player_nickname}-${bet.amount}-${bet.winning}-${bet.user_multiplier}`
        ).join('|');

        return bets.map(({ winning, player_nickname, amount, user_multiplier, player_photo }, index) => (
            <Player
                key={`${player_nickname}-${index}`}
                nickname={player_nickname}
                amount={amount}
                winning={winning}
                multiplier={user_multiplier}
                photo={player_photo}
            />
        ));
    }, [bets]);

    return (
        <div
            className={styles.players__list}
            style={{
                transform: 'translate3d(0,0,0)',
                willChange: 'transform',
                contain: 'layout'  // Более эффективный, чем 'content'
            }}
        >
            {playerList}
        </div>
    );
};

export default memo(PlayersList, (prevProps, nextProps) => {
    // Быстрая проверка длины
    if (prevProps.bets.length !== nextProps.bets.length) return false;

    // Использование хеша для быстрого сравнения
    const prevHash = prevProps.bets.map(bet =>
        `${bet.player_nickname}-${bet.amount}-${bet.winning}-${bet.user_multiplier}`
    ).join('|');

    const nextHash = nextProps.bets.map(bet =>
        `${bet.player_nickname}-${bet.amount}-${bet.winning}-${bet.user_multiplier}`
    ).join('|');

    return prevHash === nextHash;
});