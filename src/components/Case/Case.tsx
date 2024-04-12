import styles from './Case.module.css'
import Image from "next/image";
import CaseButton from "@/components/CaseButton/CaseButton";
import {Manrope} from "next/font/google";
import clsx from "clsx";

const manrope = Manrope({subsets: ["latin"], weight: ["500"]});

interface ICaseProps {
    image: string
    title: string
    desc: string
    price: number
}
const Case = ({image, desc, price, title}: ICaseProps) => {
    return (
        <div className={styles.root}>
            <Image src={image} alt={"Case"} width={203} height={203} />
            <h3 className={'opacity-90 text-title-case-color -mt-4 mb-2'}>{title}</h3>
            <p className={clsx(manrope.className, 'text-white text-xs opacity-75 mb-1')}>{desc}</p>
            <CaseButton>{price} RUB</CaseButton>
        </div>
    );
};

export default Case;