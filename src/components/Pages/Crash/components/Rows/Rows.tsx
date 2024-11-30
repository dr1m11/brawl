import styles from './Rows.module.css'
import {memo} from "react";
const Rows = () => {
    return (
        <div className={styles.rows}>
            <div className={styles.row}/>
            <div className={styles.row}/>
            <div className={styles.row}/>
            <div className={styles.row}/>
            <div className={styles.row}/>
        </div>
    );
};

export default memo(Rows, () => true);