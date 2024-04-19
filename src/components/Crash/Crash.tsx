import styles from './Crash.module.css'
const Crash = () => {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.crash}>
                    <h2 className={styles.title}>5,00x <span className={styles.title__span}>в раунде</span></h2>
                    <div className={styles.game__wrapper}>
                        <div className={styles.game}>
                            <div className={styles.game__bg}>
                                <div className={styles.row}/>
                                <div className={styles.row}/>
                                <div className={styles.row}/>
                                <div className={styles.row}/>
                                <div className={styles.row}/>
                                <div className={styles.row}/>
                                <div className={styles.row}/>
                            </div>
                            <div className={styles.game__info}>
                                <h5 className={styles.info__small}>СЕЙЧАС В ИГРЕ</h5>
                                <h3 className={styles.info__main}>50 ИГРОКОВ</h3>
                            </div>
                        </div>
                        <div className={styles.bets}>

                        </div>
                    </div>
                </div>
                <div className={styles.bet}></div>
            </div>
        </div>
    );
};

export default Crash;