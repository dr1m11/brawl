'use client'

import styles from './Crash.module.css'
import clsx from "clsx";
import {useState} from "react";

const Crash = () => {

        const [anim, setAnim] = useState(1)

        function changeAnim() {
            let i = 1
            setInterval(() => {
                setAnim(i * 10)
                i++
                if (i >= 10) return 0
                console.log(i)
            }, 50)
            if (i >= 10) return 0
        }


        return (
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.crash}>
                        <h2 className={styles.title}>5,00x <span className={styles.title__span}>в раунде</span></h2>
                        <div className={styles.game__wrapper}>
                            <div className={styles.game}>
                                <div className={styles.game__info}>
                                    <h5 className={styles.info__small}>СЕЙЧАС В ИГРЕ</h5>
                                    <h3 className={styles.info__main}>50 <span>ИГРОКОВ</span></h3>
                                </div>
                                <div className={styles.game__bg}>
                                    <div className={styles.row}/>
                                    <div className={styles.row}/>
                                    <div className={styles.row}/>
                                    <div className={styles.row}/>
                                    <div className={styles.row}/>
                                    <div className={styles.row}/>
                                    <div className={styles.row}/>
                                </div>
                                <div className={clsx(styles.bets)} style={{left: anim}}>
                                    sdhjf
                                </div>
                            </div>
                            <button onClick={() => changeAnim()}>sdf</button>
                        </div>
                    </div>
                    <div className={styles.bet}>
                    </div>
                </div>
            </div>
        );
    }
;

export default Crash;