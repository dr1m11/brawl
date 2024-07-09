'use client'
import styles from './CaseRadio.module.css';
import clsx from "clsx";
import {Manrope} from "next/font/google";
import {useState} from "react";

const manrope = Manrope({
    weight: ['400'],
    subsets: ['latin', 'cyrillic']
})

interface CaseRadio {
    fast: boolean
    setFast: (flag: boolean) => void
}

const CaseRadio = ({fast, setFast}: CaseRadio) => {

    return (
        <div className={clsx(manrope.className, styles.root)}>
            <span className={'text-white tracking-wide text-[16px]'}>Быстро</span>
            <div className={styles.uncheck} onClick={() => setFast(!fast)}>
                <div className={styles.check} style={{opacity: fast && '1'}}/>
            </div>
        </div>
    );
};

export default CaseRadio;