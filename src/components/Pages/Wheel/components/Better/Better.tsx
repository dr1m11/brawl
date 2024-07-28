import styles from './Better.module.css'
import BetCounter from "@/components/Pages/Wheel/components/BetCounter/BetCounter";
import Range from "@/components/Pages/Wheel/components/Range/Range";
const Better = () => {
    return (
        <div className={styles.menu__left}>
            <BetCounter />
            <Range />
        </div>
    );
};

export default Better;