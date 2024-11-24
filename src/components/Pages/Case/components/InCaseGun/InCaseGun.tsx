import styles from './InCaseGun.module.css'
import Image from "next/image";
import clsx from "clsx";
import {Manrope} from "next/font/google";
import {IGun} from "@/services/case/case.types";


const manrope = Manrope({subsets: ['cyrillic', 'latin'], weight: ['400', '600']})

const InCaseGun = ({name, rarity, photo_link}: IGun) => {
    return (
        <div className={clsx(manrope.className, styles.root)}>
            {photo_link && <Image src={photo_link} alt={'Gun'} width={141} height={95} className={styles.gun}/>}
            <h3 className={styles.title}>{name}</h3>
            <p className={styles.desc}>дополнительное место</p>
            <div className={styles.shadow} style={{background: rarity === 12 ? "#fc4235" : rarity === 10 ? '#E298FFFF' : '#3841A2FF'}}/>
        </div>
    );
};

export default InCaseGun;