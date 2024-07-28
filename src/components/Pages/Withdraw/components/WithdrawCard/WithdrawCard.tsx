'use client'
import styles from './WithdrawCard.module.css'
import clsx from "clsx";
import Image from "next/image";
import BrawlStars from '@/../public/Withdraw/BrawlStars.png'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setIsGameSelected} from "@/lib/withdrawSlice/withdraw.slice";
const WithdrawCard = () => {
    const isGameSelected = useAppSelector(state => state.withdraw.isGameSelected)

    const dispatch = useAppDispatch()

    return (
        <div className={clsx(styles.payment__card, isGameSelected && styles.selected)}
             onClick={() => dispatch(setIsGameSelected(!isGameSelected))}>
            <Image src={BrawlStars} alt={'Brawl Stars'} quality={100} width={73} height={73}/>
        </div>
    );
};

export default WithdrawCard;