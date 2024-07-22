import styles from './OrangeButton.module.css'
import localFont from "next/font/local";
import clsx from "clsx";

const daysOne = localFont({src: '../../../Fonts/DaysOne-Regular.ttf'});

interface OrangeButtonProps {
    onClick: () => void
    disabled: boolean
}
const OrangeButton = ({onClick, disabled}: OrangeButtonProps) => {
    return (
        <button className={clsx(styles.root, daysOne.className)} onClick={onClick} disabled={disabled}>
            Пополнить
        </button>
    );
};

export default OrangeButton;