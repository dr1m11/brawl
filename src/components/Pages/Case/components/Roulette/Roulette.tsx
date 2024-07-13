'use client'
import styles from "./Roulette.module.css";
import Image from "next/image";
import BG from "@/../public/CasePage/BG.svg";
import Gun from "@/../public/CasePage/Gun.svg";
import {useState} from "react";
import triangle from '@/../public/CasePage/Triangle.svg'
import Repeat from '@/../public/CasePage/Repeat.svg'
import {Manrope} from "next/font/google";
import clsx from "clsx";
import useResize from "@/hooks/useResize";
import RouletteItem from "@/components/Pages/Case/components/RouletteItem/RouletteItem";
import CasesCount from "@/components/Pages/Case/components/CasesCount/CasesCount";
import CaseOpenBtn from "@/components/Pages/Case/components/CaseOpenBtn/CaseOpenBtn";
import CaseRadio from "@/components/Pages/Case/components/CaseRadio/CaseRadio";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setFast, setIsFinished, setIsOpened} from "@/lib/caseSlice/caseSlice";

export function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const manrope = Manrope({subsets: ['latin', 'cyrillic'], weight: ['500']})

const Roulette = () => {
    const {isOpened, isFinished, fast, roulette} = useAppSelector(state => state.case)

    const dispatch = useAppDispatch()

    const size = useResize()

    return (
        <div className={styles.open__wrapper}>
            <Image src={BG} alt={'Background'} width={1058} height={330} className={styles.background__img}/>
            {
                isOpened
                    ?
                    <div className={styles.roulette__opened}>
                        <Image src={triangle} alt={'Triangle'} width={33} height={43}/>
                        <div className={styles.roulette__wrapper}>
                            <div/>
                            <div
                                className={styles.spin}
                                style={{
                                    transform: isOpened ? isFinished ? `translateX(${size >= 1060 ? -7670 : -6410}px)` : `translateX(${size >= 1060 ? randomInteger(-7750, -7600) : randomInteger(-6340, -6470)}px)` : null,
                                    transitionDuration: fast ? '2.5s' : isFinished && '.6s'
                                }}
                                onTransitionEnd={() => dispatch(setIsFinished(true))}
                            >
                                {
                                    roulette.length &&
                                    roulette.map((item, index) => (
                                        <RouletteItem key={index} title={item.name} rarity={item.rarity}/>
                                    ))
                                }
                            </div>
                        </div>
                        <Image src={triangle} alt={'Triangle'} width={33} height={43}
                               style={{transform: 'rotateZ(180deg)'}}/>
                        {
                            isFinished &&
                            <div className={clsx(manrope.className, styles.after__spin)}>
                                <button
                                    className={'w-[195px] h-full flex justify-center gap-x-2 items-center bg-gradient-to-r from-6747127 to-5436107 rounded-xl text-[13px] text-main'}
                                    onClick={() => {
                                        dispatch(setFast(false))
                                        dispatch(setIsFinished(false))
                                        dispatch(setIsOpened(false))
                                    }}><Image src={Repeat} alt={'Repeat'} width={20} height={19}/>Попробовать еще раз
                                </button>
                                <button
                                    className={'w-[195px] h-full bg-gradient-to-r from-6747127 to-5436107 rounded-xl text-[13px] text-main'}>Продать
                                    за {roulette[48].price} RUB
                                </button>
                            </div>
                        }
                    </div>
                    :
                    <div className={styles.roulette__closed}>
                        <div className={styles.roulette__closed__center}>
                            <div className={styles.purp__shadow}/>
                            <div className={styles.orange__shadow}/>
                            <Image src={Gun} alt={'Gun'} width={216} height={145} className={styles.center__gun}/>
                        </div>
                        <div className={styles.roulette__closed__bottom}>
                            <h3 className={styles.case__price}>459 RUB</h3>
                            <div className={styles.case__bottom__wrapper}>
                                <CasesCount/>
                                <CaseOpenBtn />
                                <CaseRadio/>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
        ;
};

export default Roulette;