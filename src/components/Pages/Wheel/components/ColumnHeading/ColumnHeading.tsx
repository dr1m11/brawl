import styles from './ColumnHeading.module.css'
import clsx from "clsx";
import Image from "next/image";
import ProfileIconGrey from "../../../../../../public/Wheel/ProfileIconGrey.svg";
import localFont from "next/font/local";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

const ColumnHeading = () => {
    return (
        <div className={clsx(styles.bet, styles.grey)}>
            <span className={clsx(daysOne.className, styles.multiply__by)}>x2</span>
            <div className={styles.players__count}>
                <Image src={ProfileIconGrey} alt={'Profile'} width={13} height={13}
                       className={styles.icon}/>
                <span className={styles.counter} style={{color: 'rgb(178, 182, 189)'}}>1</span>
            </div>
        </div>
    );
};

export default ColumnHeading;