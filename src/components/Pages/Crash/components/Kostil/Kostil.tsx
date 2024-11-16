'use client'
import styles from './Kostil.module.css'
import Game from "../Game/Game";
import PlayersList from "../PlayersList/PlayersList";
import History from "../History/History";
import {useAppDispatch} from "@/lib/hooks";
import {setIsModalOpen} from "@/lib/crashSlice/crashSlice";
import BetButton from "@/components/Pages/Crash/components/BetButton/BetButton";
import BetTips from "@/components/Pages/Crash/components/BetTips/BetTips";
import BetCounter from "@/components/Pages/Crash/components/BetCounter/BetCounter";
import {Players} from "@/components/Pages/Crash/components/Players/Players";

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
                    <Players />
                </div>
            </div>
            <div className={styles.bottom_menu}>
                <div className={styles.bet}>
                    <BetCounter />
                    <BetTips/>
                    <BetButton />
                </div>
                <div className={styles.playersVisible}>
                    <div className={styles.choose__filter}>
                        <h5 className={styles.players__title}>Ставки</h5>
                    </div>
                    <Players />
                </div>
            </div>
        </>
    );
};

export default Kostil;

