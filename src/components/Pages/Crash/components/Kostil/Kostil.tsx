'use client'
import styles from './Kostil.module.css'
import Game from "../Game/Game";
import PlayersList from "../PlayersList/PlayersList";
import History from "../History/History";
import {useAppDispatch} from "@/lib/hooks";
import {setIsModalOpen} from "@/lib/crashSlice/crashSlice";

const Kostil = () => {
    const dispatch = useAppDispatch()

    return (
        <>
            <div className={styles.info}>
                <button className={styles.infoBtn} onClick={() => dispatch(setIsModalOpen(true))}>Как играть?</button>
            </div>
            <div className={styles.game}>
            <div className={styles.graph}>
                    <Game />
                    <History />
                </div>
                <div className={styles.players}>
                    <div className={styles.choose__filter}>
                        <h5 className={styles.players__title}>Ставки</h5>
                    </div>
                    <PlayersList />
                    {/*<h5 className={styles.bets__count}>Всего {usersBets ? usersBets.length : 0} ставок</h5>*/}
                </div>
            </div>
            <div className={styles.bottom_menu}>
                <div className={styles.bet}>
                    {/*<BetCounter bet={bet} setBet={setBet}/>*/}
                    {/*<BetTips/>*/}
                    {/*<BetButton onClick={!isBetSet ? sendBet : withdrawBet}/>*/}
                </div>
                <div className={styles.playersVisible}>
                    <div className={styles.choose__filter}>
                        <h5 className={styles.players__title}>Ставки</h5>
                    </div>
                    {/*<PlayersList bets={userBets}/>*/}
                    {/*<h5 className={styles.bets__count}>Всего {usersBets ? usersBets.length : 0} ставок</h5>*/}
                </div>
            </div>
        </>
    );
};

export default Kostil;

