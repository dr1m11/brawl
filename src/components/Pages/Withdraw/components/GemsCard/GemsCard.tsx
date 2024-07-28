'use client'
import styles from './GemsCard.module.css'
import clsx from "clsx";
import Image from "next/image";
import Gems from "../../../../../../public/Withdraw/Gems.png";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setValue} from "@/lib/withdrawSlice/withdraw.slice";

interface GemsCardProps {
    value: number
}

const GemsCard = ({value}: GemsCardProps) => {
    const {isGameSelected, value: gemsValue} = useAppSelector(state => state.withdraw)

    const dispatch = useAppDispatch()

    if (!isGameSelected)
        return null

    return (
        <div className={clsx(styles.payment__card, value === gemsValue && styles.selected)}
             onClick={() => dispatch(setValue(value))}>
            <Image src={Gems} alt={'Gems'} quality={100} width={73}
                   height={73}/>
        </div>
    );
};

export default GemsCard;