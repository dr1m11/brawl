import PlayersList from "@/components/Pages/Crash/components/PlayersList/PlayersList";
import styles from '../Kostil/Kostil.module.css'
import {memo} from "react";

const Players = ({betsCount}: {betsCount: number}) => {
    return (
        <>
            <PlayersList />
            <h5 className={styles.bets__count}>Всего {betsCount} ставок</h5>
        </>
    );
};

export default memo(Players);