import {FC, memo} from "react";
import styles from "@/components/Pages/Crash/components/Kostil/Kostil.module.css";
import BetMenu from "@/components/Pages/Crash/components/betMenu/betMenu";
import Players from "@/components/Pages/Crash/components/Players/Players";
import {TUsersBets} from "@/lib/crashSlice/crashUserBets";

interface IProps {
    crashUsersBets: TUsersBets[]
    sendBet: (gameId: number, user: string, bet: number) => void
    withdrawBet: (gameId: number, user: string, multiplier: number) => void
}

const BottomMenu: FC<IProps> = ({crashUsersBets, sendBet, withdrawBet}) => {
    return (
        <div className={styles.bottom_menu}>
            <BetMenu sendBet={sendBet} withdrawBet={withdrawBet}/>
            <div className={styles.playersVisible}>
                <div className={styles.choose__filter}>
                    <h5 className={styles.players__title}>Ставки</h5>
                </div>
                <Players crashUsersBets={crashUsersBets}/>
            </div>
        </div>
    );
};

export default memo(BottomMenu, (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps)
});