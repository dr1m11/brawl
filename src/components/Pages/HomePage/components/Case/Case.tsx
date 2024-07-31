import styles from './Case.module.css'
import Image from "next/image";
import CaseButton from "@/components/CaseButton/CaseButton";
import {Manrope} from "next/font/google";
import clsx from "clsx";
import Link from "next/link";
import {CaseProps} from "@/components/Pages/HomePage/components/types";

const manrope = Manrope({subsets: ["latin"], weight: ["500"]});

const Case = ({image, desc, price, title, width, height, imgStyles, id, color}: CaseProps) => {
    return (
        <Link href={`/case/${id}`} className={styles.root}>
            <div className={styles.shadow} style={{background: color}}/>
            <Image
                src={image}
                alt={"Case"}
                width={width ? width : 156}
                height={height ? height : 156}
                className={clsx((imgStyles && imgStyles), styles.image)}
            />
            <div className={styles.about}>
                <h3 className={styles.title}>{title}</h3>
                {desc && <p className={clsx(manrope.className, styles.description)}>{desc}</p>}
            </div>
            <CaseButton>{price} RUB</CaseButton>
        </Link>
    );
};

export default Case;