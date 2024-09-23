'use client'
import styles from './Range.module.css'
import {ChangeEvent} from "react";

interface IRangeProps {
    step: number
    max: number
    value: number
    min: number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Range = ({step, min, value, max, onChange}: IRangeProps) => {
    return (
        <div className={styles.range__container}>
            <input
                type={'range'}
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
                className={styles.range}
            />
        </div>
    );
};

export default Range;