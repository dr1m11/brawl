import styles from './OrangeButton.module.css'
import localFont from "next/font/local";
import clsx from "clsx";
import {ReactNode} from "react";

const daysOne = localFont({src: '../../../Fonts/DaysOne-Regular.ttf'});

interface OrangeButtonProps {
    onClick: () => void
    disabled: boolean
    children?: ReactNode
}
const OrangeButton = ({onClick, disabled, children}: OrangeButtonProps) => {
    return (
        <button className={clsx(styles.root, daysOne.className)} onClick={onClick} disabled={disabled}>
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