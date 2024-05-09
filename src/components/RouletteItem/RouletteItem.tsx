import styles from './RouletteItem.module.css';
import Image from "next/image";
import Gun from "@/../public/CasePage/Gun.svg";
import {Manrope} from "next/font/google";
import clsx from "clsx";

const manrope = Manrope({
    subsets: ['latin', 'cyrillic'],
    weight: ['500']
})

interface RouletteItemProps {
    title?: string
}

const RouletteItem = ({title}: RouletteItemProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.blur}/>
                <Image src={Gun} alt={'Gun'} width={130} height={87} className={styles.gun}/>
                <h4 className={clsx(styles.label, manrope.className)}>{title ? title : 'Timosopia'}</h4>
            </div>
        </div>
    );
};

export default RouletteItem;