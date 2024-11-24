import styles from './History.module.css'
import {useAppSelector} from "@/lib/hooks";
const History = () => {

    const history = useAppSelector(state => state.wheel.history)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    function getColorByMultiplier(mult) {
        if (mult === 100) {
            return '#fd9419'
        } else if (mult === 10) {
            return '#589b02'
        } else if (mult === 5) {
            return '#7337bf'
        } else if (mult === 3) {
            return '#ea3251'
        } else {
            return '#6f789b'
        }
    }

    return (
        <div className={styles.history}>
            {
                history.map(({win_cell, id}) => (
                    <div className={styles.history__item} key={id} style={{
                        borderColor: getColorByMultiplier(win_cell)
                    }}/>
                ))
            }
        </div>
    );
};

export default History;