'use client'
import styles from './Burger.module.css'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {changeBurger} from "@/lib/defaultSlice/defaultSlice";
const Burger = () => {
    const isOpen = useAppSelector(state => state.default.isBurgerOpen)
    const dispatch = useAppDispatch()

    return (
        <div className={styles.root}>
            <div className={styles.button} onClick={() => dispatch(changeBurger())}>
                <div className={`${styles._1} ${isOpen ? styles._1rotate : ''}`}/>
                <div className={styles._2} style={{opacity: isOpen ? 0 : 1}}/>
                <div className={`${styles._3} ${isOpen ? styles._3rotate : ''}`}/>
            </div>
        </div>
    );
};

export default Burger