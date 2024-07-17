import styles from './ColumnHeading.module.css'
import clsx from "clsx";
import Image from "next/image";
import ProfileIconGrey from "../../../../../../public/Wheel/ProfileIconGrey.svg";
import localFont from "next/font/local";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

const ColumnHeading = ({bet, players}: {bet: number, players: number}) => {

    const getColor = () => {
        switch (bet) {
            case 2:
                return styles.grey
            case 3:
                return styles.red
            case 5:
                return styles.purple
            case 10:
                return styles.green
            case 100:
                return styles.yellow
        }
    }

    return (
        <div className={clsx(styles.bet, getColor())}>
            <span className={clsx(daysOne.className, styles.multiply__by)}>x{bet}</span>
            <div className={styles.players__count}>
                <Image src={ProfileIconGrey} alt={'Profile'} width={13} height={13}
                       className={styles.icon}/>
                <span className={styles.counter} style={{color: 'rgb(178, 182, 189)'}}>{players}</span>
            </div>
        </div>
    );
};

export default ColumnHeading;