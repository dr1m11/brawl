import styles from './SelectedMethod.module.css'

const SelectedMethod = () => {
    return (
        <div className={styles.selected__method}>
            <h3 className={styles.selected__method__title}>Выбранный метод оплаты:</h3>
            <h4 className={styles.selected__method__value}>CARD</h4>
        </div>
    );
};

export default SelectedMethod;