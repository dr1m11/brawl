import styles from './BetCounter.module.css'
const BetCounter = () => {
    return (
        <div className={styles.current__bet}>
            <button className={styles.minus}>-</button>
            <span className={styles.sum}>50 RUB</span>
            <button className={styles.plus}>+</button>
        </div>
    );
};

export default BetCounter;