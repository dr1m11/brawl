'use client'
import styles from './SelectedMethod.module.css'
import {useAppSelector} from "@/lib/hooks";
import {useGetCard} from "@/hooks/Card/useGetCard";

const SelectedMethod = () => {
    const selectedMethod = useGetCard()
    return (
        <div className={styles.selected__method}>
            <h3 className={styles.selected__method__title}>Выбранный метод оплаты:</h3>
            <h4 className={styles.selected__method__value}>Перевод на {selectedMethod.bank}</h4>
        </div>
    );
};

export default SelectedMethod;