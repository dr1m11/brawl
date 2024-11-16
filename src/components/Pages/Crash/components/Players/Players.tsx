'use client'
import PlayersList from "@/components/Pages/Crash/components/PlayersList/PlayersList";
import styles from '../Kostil/Kostil.module.css'
import {useAppSelector} from "@/lib/hooks";

export const Players = () => {

    const usersBets = useAppSelector(state => state.crash.usersBets)

    return (
        <>
            <PlayersList />
            <h5 className={styles.bets__count}>Всего {usersBets ? usersBets.length : 0} ставок</h5>
        </>
    )
}