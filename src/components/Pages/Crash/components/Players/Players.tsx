'use client'
import PlayersList from "@/components/Pages/Crash/components/PlayersList/PlayersList";
import styles from '../Kostil/Kostil.module.css'
import {useAppSelector} from "@/lib/hooks";
import {memo} from "react";

const Players = () => {
    const betsCount = useAppSelector(state => state.crash.usersBets?.length ?? 0,
        (prev, next) => prev === next
    );

    return (
        <>
            <PlayersList />
            <h5 className={styles.bets__count}>Всего {betsCount} ставок</h5>
        </>
    );
};

export default memo(Players);