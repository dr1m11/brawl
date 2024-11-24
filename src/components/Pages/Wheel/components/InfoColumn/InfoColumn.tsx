import styles from './InfoColumn.module.css'
import ColumnHeading from "@/components/Pages/Wheel/components/ColumnHeading/ColumnHeading";
import PlayersList from "@/components/Pages/Wheel/components/PlayersList/PlayersList";
import {BetInterface} from "@/lib/wheelSlice/wheelSlice";

interface InfoColumnProps {
    bet: number
    users: BetInterface[] | null
}

const InfoColumn = ({bet, users}: InfoColumnProps) => {
    return (
        <div className={styles.column}>
            <ColumnHeading bet={bet} players={users ? users.length : 0}/>
            <PlayersList users={users ?? []}/>
        </div>
    );
};

export default InfoColumn;