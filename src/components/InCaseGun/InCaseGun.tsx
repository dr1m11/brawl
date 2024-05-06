import styles from './InCaseGun.module.css'
import Image from "next/image";
import clsx from "clsx";
import {Manrope} from "next/font/google";
import Gun from "../../../public/CasePage/Gun.svg";


const manrope = Manrope({subsets: ['cyrillic', 'latin'], weight: ['400', '600']})

const InCaseGun = () => {
    return (
        <div className={clsx(manrope.className, styles.root)}>
            <Image src={Gun} alt={'Gun'} width={141} height={95} className={styles.gun}/>
            <h3 className={styles.title}>Название</h3>
            <p className={styles.desc}>дополнительное место</p>
            <div className={styles.shadow}/>
        </div>
    );
};

export default InCaseGun;