'use client'
import styles from './History.module.css'
import {useAppSelector} from "@/lib/hooks";
import localFont from "next/font/local";
import clsx from "clsx";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

const History = () => {
    const history = useAppSelector(state => state.crash.history)

    function getColorByMultiplier(mult) {
        if (mult >= 10) {
            return '#e0b700'
        } else if (mult >= 5) {
            return '#e03400'
        } else if (mult >= 2) {
            return '#008ae0'
        } else if (mult >= 1.5) {
            return '#00e013'
        } else {
            return '#2200425E'
        }
    }

    return (
        <div className={styles.history}>
            {
                history.map(({id, win_multiplier}) => (
                    <div
                        key={id}
                        className={clsx(styles.history__item, daysOne.className)}
                        style={{background: getColorByMultiplier(+win_multiplier)}}
                    >
                        {(+win_multiplier).toFixed(2)}
                    </div>
                ))
            }
        </div>
    );
};

export default History;