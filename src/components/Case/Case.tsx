import styles from './Case.module.css'
import Image from "next/image";
import CaseButton from "@/components/CaseButton/CaseButton";
import {Manrope} from "next/font/google";
import clsx from "clsx";
import Link from "next/link";

const manrope = Manrope({subsets: ["latin"], weight: ["500"]});

interface ICaseProps {
    image: any
    title: string
    desc: string
    price: number
    width?: number
    height?: number
    imgStyles?: string
    id: number
}
const Case = ({image, desc, price, title, width, height, imgStyles, id}: ICaseProps) => {
    return (
        <div className={styles.root}>
            <Image src={image} alt={"Case"} width={width ? width : 156 } height={height ? height : 156} className={imgStyles && imgStyles}/>
            <h3 className={'opacity-90 text-title-case-color -mt-4 mb-2'}>{title}</h3>
            <p className={clsx(manrope.className, 'text-white text-xs opacity-75 mb-1')}>{desc}</p>
            <Link href={`/${id}`}><CaseButton>{price} RUB</CaseButton></Link>
        </div>
    );
};

export default Case;