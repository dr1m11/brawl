import styles from './PlayersList.module.css'
import Player from "@/components/CrashPlayer/Player";
const PlayersList = () => {
    return (
        <div className={styles.players}>
            <Player hideMultiplier hideWon/>
            <Player hideMultiplier hideWon/>
            <Player hideMultiplier hideWon/>
            <Player hideMultiplier hideWon/>
        </div>
    );
};

export default PlayersList;