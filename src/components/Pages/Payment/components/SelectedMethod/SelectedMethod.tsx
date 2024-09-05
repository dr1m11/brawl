'use client'
import styles from './SelectedMethod.module.css'
import {useAppSelector} from "@/lib/hooks";

const SelectedMethod = () => {
    const selectedMethod = useAppSelector(state => state.payment.selectedMethod)
    return (
        <div className={styles.selected__method}>
            {
                !!selectedMethod ?
                    <>
                        <h3 className={styles.selected__method__title}>Выбранный метод оплаты:</h3>
                        <h4 className={styles.selected__method__value}>{selectedMethod.title}</h4>
                    </>
                    :
                    <h3 className={styles.unselected}>Выберите метод оплаты</h3>
            }
        </div>
    );
};

export default SelectedMethod;