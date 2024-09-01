'use client'
import styles from './GemsCard.module.css'
import clsx from "clsx";
import Image, {StaticImageData} from "next/image";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setValue} from "@/lib/withdrawSlice/withdraw.slice";

interface GemsCardProps {
    value: string
    img: StaticImageData
}

const GemsCard = ({value, img}: GemsCardProps) => {
    const {isGameSelected, value: gemsValue} = useAppSelector(state => state.withdraw)

    const dispatch = useAppDispatch()

    if (!isGameSelected)
        return null

    console.log(gemsValue)

    return (
        <div className={clsx(styles.payment__card, value == gemsValue && styles.selected)}
             onClick={() => dispatch(setValue(value))}>
            <Image src={img} alt={'Gems'} quality={100} width={73}
                   height={73}/>
        </div>
    );
};

export default GemsCard;