'use client'
import styles from './infoModal.module.css'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setIsModalOpen} from "@/lib/crashSlice/crashSlice";
import {memo, MouseEvent} from "react";
import {Manrope} from "next/font/google";
import clsx from "clsx";
import GreenButton from "@/components/GreenButton/GreenButton";

const manrope = Manrope({subsets: ["latin"], weight: ["500", '600']});


const InfoModal = () => {
    const isOpen = useAppSelector(state => state.crash.isModalOpen)

    const dispatch = useAppDispatch()

    const handleClose = (event: MouseEvent) => {
        event.stopPropagation()
        dispatch(setIsModalOpen(false))
    }

    if (!isOpen) return


    return (
        <div className={clsx(styles.root, manrope.className)} onClick={handleClose}>
            <div className={styles.wrapper} onClick={event => event.stopPropagation()}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Как играть?</h2>
                    <ul className={styles.list}>
                        <li>Ваша задача в этой игре - успеть вывести деньги до того, как Эль Примо улетит</li>
                        <li>С помощью ползунка или же кнопок-подсказок выставьте количество монет, что хотите
                            поставить
                        </li>
                        <li>Выведите монеты до того, как улетит Эль Примо с помощью кнопки «Вывод»</li>
                    </ul>
                </div>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/*@ts-expect-error*/}
                <GreenButton onClick={handleClose} style={{width: '100%'}} sameColor>ВПЕРЕД!</GreenButton>
            </div>
        </div>
    )
}

export default memo(InfoModal)