import styles from './OrangeButton.module.css'
import localFont from "next/font/local";
import clsx from "clsx";
import {ReactNode} from "react";

const daysOne = localFont({src: '../../../Fonts/DaysOne-Regular.ttf'});

interface OrangeButtonProps {
    onClick: () => void
    disabled: boolean
    children?: ReactNode
    margin?: number
}
const OrangeButton = ({onClick, disabled, children, margin}: OrangeButtonProps) => {
    return (
        <button className={clsx(styles.root, daysOne.className)} style={{marginTop: margin}} onClick={onClick} disabled={disabled}>
            {
                children ?
                    children
                    :
                    'Пополнить'
            }
        </button>
    );
};

export default OrangeButton;