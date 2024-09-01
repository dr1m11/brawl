'use client'
import styles from './AfterSpin.module.css'
import clsx from "clsx";
import {setFast, setIsFinished, setIsOpened, setWinedItem} from "@/lib/caseSlice/caseSlice";
import Image from "next/image";
import Repeat from "../../../../../../public/CasePage/Repeat.svg";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {Manrope} from "next/font/google";
import {itemService} from "@/services/item/item.service";
import {useQueryClient} from "@tanstack/react-query";
import PriceIcon from "@/components/PriceIcon/PriceIcon";
import {useEffect} from "react";
import useSound from "use-sound";

const manrope = Manrope({subsets: ['latin', 'cyrillic'], weight: ['500']})

const AfterSpin = () => {

    const dispatch = useAppDispatch()

    const { isFinished, roulette, winedItem} = useAppSelector(state => state.case)
    const id = useAppSelector(state => state.user.id)

    const [playHover] = useSound('/sounds/case/onClose.mp3')

    const queryClient = useQueryClient()

    useEffect(() => {
        if (isFinished) {
            playHover()
        }
    }, [isFinished]);

    if (!isFinished)
        return null

    const sellItem = async () => {
        await itemService.sellItem(id, winedItem)
        queryClient.invalidateQueries({
            queryKey: ['user']
        })
        dispatch(setIsOpened(false))
        dispatch(setFast(false))
        dispatch(setIsFinished(false))
        dispatch(setWinedItem(null))
    }

    return (
        <div className={clsx(manrope.className, styles.after__spin)}>
            <button
                className={styles.ones__more__btn}
                onClick={() => {
                    dispatch(setFast(false))
                    dispatch(setIsFinished(false))
                    dispatch(setIsOpened(false))
                }}><Image src={Repeat} alt={'Repeat'} width={20} height={19} className={styles.repeat}/>Попробовать еще раз
            </button>
            <button
                className={styles.sell}
                onClick={sellItem}
            >
                Продать
                за {roulette[48].price} <PriceIcon />
            </button>
        </div>
    );
};

export default AfterSpin;