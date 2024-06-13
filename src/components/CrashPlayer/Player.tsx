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
}

const Player = ({hideAvatar, hideMultiplier, hideWon, hideBet, hideNickname}: PlayerProps) => {
    return (
        <div className={clsx(styles.root, manrope.className)}>
            <Image src={Avatar} alt={'Avatar'} width={28} height={29} className={styles.avatar} style={{display: hideAvatar && 'none'}}/>
            <h4 className={styles.nickname} style={{display: hideNickname && 'none'}}>Timosopia...</h4>
            <h4 className={styles.bet} style={{display: hideBet && 'none'}}>3034 ₽</h4>
            <h4 className={styles.multiplier} style={{display: hideMultiplier && 'none'}}>2x</h4>
            <h4 className={styles.won} style={{display: hideWon && 'none'}}>6068 ₽</h4>
        </div>
    );
};

export default Player;