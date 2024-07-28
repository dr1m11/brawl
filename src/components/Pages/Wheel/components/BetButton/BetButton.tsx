import styles from './BetButton.module.css'
import localFont from "next/font/local";
import Image from "next/image";
import Arrow from '@/../public/Wheel/Arrow.svg'
import {useAppSelector} from "@/lib/hooks";


const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

interface BetButtonProps {
    time: number
    onClick: () => void
}

const BetButton = ({time, onClick}: BetButtonProps) => {
    const {isBetSet, socketEvent, bet} = useAppSelector(state => state.wheel)
    const balance = useAppSelector(state => state.user.balance)
    return (
        <div className={styles.menu__center}>
            <div className={styles.determiner}>
                <Image src={Arrow} alt={'Arrow'} width={99} height={312} className={styles.arrow}/>
                <div className={styles.circle}>
                    <h3 className={styles.numbers}>{time && time.toFixed(1)}</h3>
                    <span className={styles.numbers__label}>сделайте ставку</span>
                </div>
            </div>
            <button className={styles.bet__btn} onClick={onClick}
                    disabled={isBetSet || (socketEvent.status !== "Pending") || (+balance < +bet)}
            >
                <h5 className={daysOne.className}>
                    {(isBetSet || (socketEvent.status !== "Pending")) ?
                        "ОЖИДАЙТЕ" :
                        "СТАВКА"
                    }
                </h5>
            </button>
        </div>
    );
};

export default BetButton;