import styles from './Better.module.css'
import BetCounter from "@/components/Pages/Wheel/components/BetCounter/BetCounter";
const Better = () => {
    return (
        <div className={styles.menu__left}>
            <BetCounter />
            <div className={styles.range__container}>
                <input type={'range'} min={'0'} max={'1000'} step={'10'} value={'500'}
                       className={styles.range}/>
            </div>
        </div>
    );
};

export default Better;