import styles from './PlayersList.module.css'
import Player from "@/components/CrashPlayer/Player";
const PlayersList = () => {
    return (
        <div className={styles.players__list}>
            <Player/>
            <Player/>
            <Player/>
            <Player/>
            <Player/>
            <Player/>
            <Player/>
            <Player/>
            <Player/>
            <Player/>
            <Player/>
            <Player/>
            <Player/>
            <Player/>
        </div>
    );
};

export default PlayersList;