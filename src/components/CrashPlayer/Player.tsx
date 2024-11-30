import styles from './Player.module.css'
import clsx from "clsx";
import {memo, useMemo} from "react";

// const manrope = Manrope({weight: ['400', '500', '600'], subsets: ['latin', 'cyrillic']})

interface PlayerProps {
    hideAvatar?: boolean
    hideNickname?: boolean
    hideBet?: boolean
    hideMultiplier?: boolean
    hideWon?: boolean
    nickname?: string
    multiplier?: number
    winning?: number
    amount?: number
    photo?: number
}

const Player = ({
                    amount,
                    nickname,
                    multiplier,
                    winning,
                }: PlayerProps) => {
    // Форматирование денежных значений
    const formattedAmount = useMemo(() =>
            amount?.toFixed(0),
        [amount]
    );

    const formattedWinning = useMemo(() =>
            winning ? winning.toFixed(0) : '0',
        [winning]
    );

    return (
        <div className={clsx(styles.root)}>
            {/*<Image*/}
            {/*    src={`https://raw.githubusercontent.com/tomikartemik/brawler_avatars/main/image_${photo}.jpg`}*/}
            {/*    alt={'Avatar'}*/}
            {/*    width={170}*/}
            {/*    height={170}*/}
            {/*    className={styles.avatar}*/}
            {/*/>*/}


            <h4 className={styles.nickname}>
                {nickname}
            </h4>


            <h4 className={styles.bet}>
                {formattedAmount} ₽
            </h4>


            <h4 className={styles.multiplier}>
                {multiplier}x
            </h4>


            <h4 className={styles.won}>
                {formattedWinning} ₽
            </h4>
        </div>
    );
};

export default memo(Player, (prevProps, nextProps) => {
    return JSON.stringify(prevProps) == JSON.stringify(nextProps);
});