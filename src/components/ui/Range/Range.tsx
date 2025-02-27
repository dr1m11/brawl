'use client'
import styles from './Range.module.css'
import {ChangeEvent} from "react";

interface IRangeProps {
    step: number
    max: number
    value: number
    min: number | string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean;
}

const Range = ({step, min, value, max, onChange, disabled}: IRangeProps) => {
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
                disabled={disabled}
            />
        </div>
    );
};

export default Range;