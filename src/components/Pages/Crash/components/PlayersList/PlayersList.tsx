import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
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
    // Компонент строки списка
    // eslint-disable-next-line react/display-name
    const PlayerRow = ({ index, style }: { index: number, style: React.CSSProperties }) => {
        const bet = bets[index];
        return (
            <div style={style}>
                <Player
                    key={`${bet.player_nickname}-${index}`}
                    nickname={bet.player_nickname}
                    amount={bet.amount}
                    winning={bet.winning}
                    multiplier={bet.user_multiplier}
                    photo={bet.player_photo}
                />
            </div>
        );
    }

    console.log('sdkhfg')

    return (
        <div
            className={styles.players__list}
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <AutoSizer>
                {({ height, width }) => (
                    <List
                        height={height}
                        itemCount={bets.length}
                        itemSize={60} // Высота элемента, подставьте реальную высоту вашего элемента
                        width={width}
                    >
                        {PlayerRow}
                    </List>
                )}
            </AutoSizer>
        </div>
    );
};

export default PlayersList