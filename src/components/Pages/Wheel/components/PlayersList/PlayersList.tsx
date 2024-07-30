import styles from './PlayersList.module.css'
import Player from "@/components/CrashPlayer/Player";
import {BetInterface} from "@/lib/wheelSlice/wheelSlice";
const PlayersList = ({users}: {users: BetInterface[]}) => {
    return (
        <div className={styles.players}>
            {/*{*/}
            {/*    users &&*/}
            {/*    users.map((value, index) => (*/}
            {/*        <Player key={index} hideMultiplier hideWon nickname={value.player_nickname} amount={value.amount}/>*/}
            {/*    ))*/}
            {/*}*/}
            <Player hideMultiplier hideWon nickname={"nick"} amount={300}/>
            <Player hideMultiplier hideWon nickname={"nick"} amount={300}/>
            <Player hideMultiplier hideWon nickname={"nick"} amount={300}/>
            <Player hideMultiplier hideWon nickname={"nick"} amount={300}/>
            <Player hideMultiplier hideWon nickname={"nick"} amount={300}/>
        </div>
    );
};

export default PlayersList;