'use client'
import styles from './GemsCard.module.css'
import clsx from "clsx";
import Image, {StaticImageData} from "next/image";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setPosition, setPrice} from "@/lib/withdrawSlice/withdraw.slice";

interface GemsCardProps {
    position: string
    img: StaticImageData
    price: number
}

const GemsCard = ({position, img, price}: GemsCardProps) => {
    const {isGameSelected, price: gemsPrice} = useAppSelector(state => state.withdraw)

    const dispatch = useAppDispatch()

    if (!isGameSelected)
        return null

    const onClickHandler = () => {
        dispatch(setPrice(price))
        dispatch(setPosition(position))
    }

    return (
        <div className={clsx(styles.payment__card, price === gemsPrice && styles.selected)}
             onClick={onClickHandler}>
            <Image src={img} alt={'Gems'} quality={100} width={73}
                   height={73}/>
        </div>
    );
};

export default GemsCard;