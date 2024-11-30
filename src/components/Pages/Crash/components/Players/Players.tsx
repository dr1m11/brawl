'use client'
import PlayersList from "@/components/Pages/Crash/components/PlayersList/PlayersList";
import styles from '../Kostil/Kostil.module.css'
import {FC, memo, useMemo} from "react";
import {TUsersBets} from "@/lib/crashSlice/crashUserBets";

interface IProps{
    crashUsersBets: TUsersBets[]
}


const Players: FC<IProps> = ({crashUsersBets}) => {
    // Мемоизируйте длину для предотвращения лишних ре-рендеров
    const betsCount = useMemo(() => crashUsersBets.length, [crashUsersBets]);

    return (
        <>
            <PlayersList bets={crashUsersBets}/>
            <h5 className={styles.bets__count}>
                Всего {betsCount} ставок
            </h5>
        </>
    );
};

export default memo(Players, (prevProps, nextProps) => {
    return prevProps.crashUsersBets.length === nextProps.crashUsersBets.length &&
        prevProps.crashUsersBets[0]?.player_nickname === nextProps.crashUsersBets[0]?.player_nickname
});