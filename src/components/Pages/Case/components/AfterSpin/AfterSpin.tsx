'use client'
import styles from './AfterSpin.module.css'
import clsx from "clsx";
import {setFast, setIsFinished, setIsOpened} from "@/lib/caseSlice/caseSlice";
import Image from "next/image";
import Repeat from "../../../../../../public/CasePage/Repeat.svg";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {Manrope} from "next/font/google";

const manrope = Manrope({subsets: ['latin', 'cyrillic'], weight: ['500']})

const AfterSpin = () => {

    const dispatch = useAppDispatch()

    const { isFinished, roulette} = useAppSelector(state => state.case)

    if (!isFinished)
        return null

    return (
        <div className={clsx(manrope.className, styles.after__spin)}>
            <button
                className={styles.ones__more__btn}
                onClick={() => {
                    dispatch(setFast(false))
                    dispatch(setIsFinished(false))
                    dispatch(setIsOpened(false))
                }}><Image src={Repeat} alt={'Repeat'} width={20} height={19}/>Попробовать еще раз
            </button>
            <button
                className={styles.sell}>Продать
                за {roulette[48].price} RUB
            </button>
        </div>
    );
};

export default AfterSpin;