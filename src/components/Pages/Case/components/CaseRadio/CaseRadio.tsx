'use client'
import styles from './CaseRadio.module.css';
import clsx from "clsx";
import {Manrope} from "next/font/google";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setFast} from "@/lib/caseSlice/caseSlice";

const manrope = Manrope({
    weight: ['400'],
    subsets: ['latin', 'cyrillic']
})

const CaseRadio = () => {

    const fast = useAppSelector(state => state.case.fast)

    const dispatch = useAppDispatch()

    return (
        <div className={clsx(manrope.className, styles.root)}>
            <span className={styles.label}>Быстро</span>
            <div className={styles.uncheck} onClick={() => dispatch(setFast(!fast))}>
                <div className={styles.check} style={{opacity: fast && '1'}}/>
            </div>
        </div>
    );
};

export default CaseRadio;