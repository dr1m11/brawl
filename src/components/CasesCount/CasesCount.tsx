'use client'
import clsx from "clsx";
import styles from './CasesCount.module.css'
import {Manrope} from "next/font/google";
import {useState} from "react";


const manrope = Manrope({weight: ['400', '500', '600'], subsets: ['latin']})

const CasesCount = () => {
    const [active, setActive] = useState(0)
    return (
        <div className={clsx(styles.cases__count, manrope.className)}>
            <button className={clsx(styles.cases__counter, active === 0 ? styles.active : null)} onClick={() => setActive(0)}>x1</button>
            <button className={clsx(styles.cases__counter, active === 1 ? styles.active : null)} onClick={() => setActive(1)}>x2</button>
            <button className={clsx(styles.cases__counter, active === 2 ? styles.active : null)} onClick={() => setActive(2)}>x3</button>
            <button className={clsx(styles.cases__counter, active === 3 ? styles.active : null)} onClick={() => setActive(3)}>x4</button>
            <button className={clsx(styles.cases__counter, active === 4 ? styles.active : null)} onClick={() => setActive(4)}>x5</button>
        </div>
    );
};

export default CasesCount;