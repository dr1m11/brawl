import styles from './PlayersList.module.css'
import Player from "@/components/CrashPlayer/Player";
import {BetInterface} from "@/lib/wheelSlice/wheelSlice";
const PlayersList = ({users}: {users: BetInterface[]}) => {
    return (
        <div className={styles.players}>
            {
                users &&
                users.map((value, index) => (
                    <Player key={index} nickname={value.player_nickname} amount={value.amount} photo={value.image} variant={'wheel'}/>
                ))
            }
        </div>
    );
};

export default PlayersList;