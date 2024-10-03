import styles from './Player.module.css'
import Avatar from '@/../public/Crash/Avatar.svg'
import Image from "next/image";
import {Manrope} from "next/font/google";
import clsx from "clsx";

const manrope = Manrope({weight: ['400', '500', '600'], subsets: ['latin', 'cyrillic']})

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
}

const Player = ({hideAvatar, hideMultiplier, hideWon, hideBet, hideNickname, amount, nickname, multiplier, winning}: PlayerProps) => {
    return (
        <div className={clsx(styles.root, manrope.className)}>
            <Image src={Avatar} alt={'Avatar'} width={28} height={29} className={styles.avatar} style={{display: hideAvatar && 'none'}}/>
            <h4 className={styles.nickname} style={{display: hideNickname && 'none'}}>{nickname}</h4>
            <h4 className={styles.bet} style={{display: hideBet && 'none'}}>{amount.toFixed(0)} ₽</h4>
            <h4 className={styles.multiplier} style={{display: hideMultiplier && 'none'}}>{multiplier}x</h4>
            <h4 className={styles.won} style={{display: hideWon && 'none'}}>{winning ? winning.toFixed(0) : winning} ₽</h4>
        </div>
    );
};

export default Player;