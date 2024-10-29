import styles from './RouletteItem.module.css';
import Image from "next/image";

interface RouletteItemProps {
    photo_link?: string
    color: string
}

const RouletteItem = ({photo_link, color}: RouletteItemProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.blur} style={{background: color}}/>
                <Image src={photo_link} alt={'Gun'} width={130} height={87} className={styles.gun} loading={'eager'}/>
            </div>
        </div>
    );
};

export default RouletteItem;