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
    rarity?: number
    photo_link?: string
    color: string
}

const RouletteItem = ({rarity, photo_link, color}: RouletteItemProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.blur} style={{background: color}}/>
                <Image src={photo_link} alt={'Gun'} width={130} height={87} className={styles.gun} />
            </div>
        </div>
    );
};

export default RouletteItem;