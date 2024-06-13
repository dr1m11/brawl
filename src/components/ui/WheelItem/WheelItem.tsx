import styles from './WheelItem.module.css'
import GreenItem from '@/../public/Wheel/GreenItem.svg'
import Image from "next/image";
import clsx from "clsx";
const WheelItem = ({rotate}: {rotate: number}) => {
    return (
        <div className={clsx(styles.root)} style={{transform: `rotate(${rotate}deg)`}}>
            <Image src={GreenItem} alt={'Green Item'} width={68} height={83} className={styles.bg}/>
            <h1 className={styles.label}>x20</h1>
        </div>
    );
};

export default WheelItem;