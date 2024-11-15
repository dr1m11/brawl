'use client'
import styles from './InCaseGun.module.css'
import Image from "next/image";
import clsx from "clsx";
import {Manrope} from "next/font/google";
import Gun from "../../../public/CasePage/Gun.svg";
import {IGun} from "@/services/case/case.types";
import {useState} from "react";
import PriceIcon from "@/components/PriceIcon/PriceIcon";
import {id} from "postcss-selector-parser";


const manrope = Manrope({subsets: ['cyrillic', 'latin'], weight: ['400', '600']})

const InCaseGun = ({name, photo_link, color, price}: IGun) => {
    const [isActive, setActive] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    return (
        <div
            className={clsx(manrope.className, styles.root)}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            <div className={styles.price} style={{opacity: isActive && 1}}>{price} <PriceIcon/></div>
            <div className={styles.wrapper}>
                {photo_link && <Image src={photo_link} alt={'Gun'} width={141} height={95} className={styles.gun}/>}
                <h3 className={styles.title}>{name}</h3>
                <div className={styles.shadow} style={{background: color}}/>
            </div>
        </div>
    );
};

export default InCaseGun;