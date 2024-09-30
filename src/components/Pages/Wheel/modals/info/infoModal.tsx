'use client'
import styles from './infoModal.module.css'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {MouseEvent} from "react";
import {Manrope} from "next/font/google";
import clsx from "clsx";
import GreenButton from "@/components/GreenButton/GreenButton";
import {setIsModalOpen} from "@/lib/wheelSlice/wheelSlice";

const manrope = Manrope({subsets: ["latin"], weight: ["500", '600']});


export const InfoModal = () => {
    const isOpen = useAppSelector(state => state.wheel.isModalOpen)

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
                        <li>Ваша задача в этой игре - угадать, какая ячейка окажется в центре барабана</li>
                        <li>Введите сумму ставки, или же выставьте ее с помощью ползунка
                        </li>
                        <li>Укажите, какая ячейка по вашему окажется в центре барабана</li>
                        <li>Помните, чем больше множитель ячейки, тем меньшн вероятность ее выпадения</li>
                    </ul>
                </div>
                <GreenButton onClick={handleClose} style={{width: '100%'}} sameColor>ВПЕРЕД!</GreenButton>
            </div>
        </div>
    )
}