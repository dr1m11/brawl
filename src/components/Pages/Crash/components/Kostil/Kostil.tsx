'use client'
import styles from './Kostil.module.css'
import Game from "../Game/Game";
import History from "../History/History";
import BetButton from "@/components/Pages/Crash/components/BetButton/BetButton";
import BetTips from "@/components/Pages/Crash/components/BetTips/BetTips";
import BetCounter from "@/components/Pages/Crash/components/BetCounter/BetCounter";
import Players from "@/components/Pages/Crash/components/Players/Players";
import {memo} from "react";
import useResize from "@/hooks/useResize";

const Kostil = () => {
    // const dispatch = useAppDispatch()
    //
    // const betsCount = useAppSelector(state => state.crash.usersBets?.length ?? 0,
    //     (prev, next) => prev === next
    // );

    const width = useResize() ?? 0

    return (
        <>
            <div className={styles.info}>
                {/*<button className={styles.infoBtn} onClick={() => dispatch(setIsModalOpen(true))}>Как играть?</button>*/}
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
                    {width > 900 && <Players />}
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
                    {/*{width <= 900 && <Players/>}*/}
                </div>
            </div>
        </>
    );
};

export default memo(Kostil);

