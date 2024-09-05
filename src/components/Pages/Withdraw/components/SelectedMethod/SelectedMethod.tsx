'use client'
import styles from './SelectedMethod.module.css'
import {useAppSelector} from "@/lib/hooks";

const SelectedMethod = () => {
    const game = useAppSelector(state => state.withdraw.isGameSelected)
    return (
        <div className={styles.selected__method}>
            <h3 className={styles.selected__method__title}>Выбранная игра</h3>
            <h4 className={styles.selected__method__value}>{game ? 'Brawl Stars' : ''}</h4>
        </div>
    );
};

export default SelectedMethod;