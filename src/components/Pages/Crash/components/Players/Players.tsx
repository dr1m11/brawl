'use client'
import PlayersList from "@/components/Pages/Crash/components/PlayersList/PlayersList";
import styles from '../Kostil/Kostil.module.css'
import {memo, useMemo} from "react";
import {useAppSelector} from "@/lib/hooks";

const Players = () => {
    const bets = useAppSelector(state => state.crashUsersBets.usersBets)
    
    const betsCount = useMemo(() => (bets ?? []).length, [bets])

    return (
        <>
            <PlayersList bets={bets}/>
            <h5 className={styles.bets__count}>Всего {betsCount} ставок</h5>
        </>
    );
};

export default memo(Players, (prevProps, nextProps) => {
    return true; // компонент будет обновляться только при реальном изменении bets
});