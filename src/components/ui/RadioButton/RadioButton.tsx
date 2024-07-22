'use client'
import styles from './RadioButton.module.css'
import {useState} from "react";
import CSS from "csstype"
import clsx from "clsx";

interface RadioButtonProps {
    outlineStyle?: CSS.Properties
    inlineStyle?: CSS.Properties
    onClick?: () => void
}

const RadioButton = ({onClick, outlineStyle, inlineStyle}: RadioButtonProps) => {
    const [visible, setVisible] = useState(false)
    return (
        <div className={styles.root} onClick={() => {
            if (onClick) {
                onClick()
            }
            setVisible(!visible)
        }}
             style={outlineStyle}
        >
            <div className={clsx(styles.inside, `opacity-${visible ? 1 : 0}`)} style={inlineStyle}/>
        </div>
    );
};

export default RadioButton;