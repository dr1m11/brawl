import styles from './Case.module.css'
import Image from "next/image";
import CaseButton from "@/components/CaseButton/CaseButton";
import {Manrope} from "next/font/google";
import clsx from "clsx";
import Link from "next/link";
import {CaseProps} from "@/components/HomePage/components/types";

const manrope = Manrope({subsets: ["latin"], weight: ["500"]});

const Case = ({image, desc, price, title, width, height, imgStyles, id}: CaseProps) => {
    return (
        <Link href={`/${id}`} className={styles.root}>
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