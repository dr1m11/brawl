'use client'
import styles from './Spinner.module.css'
import {randomInteger} from "@/components/Pages/Case/components/Roulette/Roulette";
import {setIsFinished} from "@/lib/caseSlice/caseSlice";
import RouletteItem from "@/components/Pages/Case/components/RouletteItem/RouletteItem";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import useResize from "@/hooks/useResize";

const Spinner = () => {

    const [start, setStart] = useState(false)

    const {isOpened, isFinished, fast, roulette} = useAppSelector(state => state.case)

    const dispatch = useAppDispatch()

    const size = useResize()

    const getRotationBySize = () => {
        if (size >= 1060) {
            return -7670
        } else if (size >= 768) {
            return -6410
        } else {
            return -6490
        }
    }

    const getSecondRotationBySize = () => {
        if (size >= 1060) {
            return randomInteger(-7750, -7600)
        } else if (size >= 768) {
            return randomInteger(-6340, -6470)
        } else {
            return randomInteger(-6425, -6560)
        }
    }

    useEffect(() => {
        setStart(true)
    }, []);

    return (
        <div
            className={styles.spin}
            style={{
                transform: start && isOpened ? isFinished ? `translateX(${getRotationBySize()}px)` : `translateX(${getSecondRotationBySize()}px)` : 'translateX(0px)',
                transitionDuration: fast ? '2.5s' : isFinished && '.6s',
            }}
            onTransitionEnd={() => dispatch(setIsFinished(true))}
        >
            {
                roulette.length &&
                roulette.map((item, index) => (
                    <RouletteItem key={index} rarity={item.rarity} photo_link={item.photo_link} color={item.color}/>
                ))
            }
        </div>
    );
};

export default Spinner;