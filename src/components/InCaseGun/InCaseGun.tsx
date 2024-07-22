import styles from './InCaseGun.module.css'
import Image from "next/image";
import clsx from "clsx";
import {Manrope} from "next/font/google";
import Gun from "../../../public/CasePage/Gun.svg";
import {IGun} from "@/services/case/case.types";


const manrope = Manrope({subsets: ['cyrillic', 'latin'], weight: ['400', '600']})

const InCaseGun = ({name, photo_link, color}: IGun) => {
    return (
        <div className={clsx(manrope.className, styles.root)}>
            {photo_link && <Image src={photo_link} alt={'Gun'} width={141} height={95} className={styles.gun}/>}
            <h3 className={styles.title}>{name}</h3>
            <div className={styles.shadow} style={{background: color}}/>
        </div>
    );
};

export default InCaseGun;