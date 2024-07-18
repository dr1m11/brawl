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

    useEffect(() => {
        setStart(true)
    }, []);

    return (
        <div
            className={styles.spin}
            style={{
                transform: start && isOpened ? isFinished ? `translateX(${size >= 1060 ? -7670 : -6410}px)` : `translateX(${size >= 1060 ? randomInteger(-7750, -7600) : randomInteger(-6340, -6470)}px)` : 'translateX(0px)',
                transitionDuration: fast ? '2.5s' : isFinished && '.6s',
            }}
            onTransitionEnd={() => dispatch(setIsFinished(true))}
        >
            {
                roulette.length &&
                roulette.map((item, index) => (
                    <RouletteItem key={index} title={item.name} rarity={item.rarity} photo_link={item.photo_link}/>
                ))
            }
        </div>
    );
};

export default Spinner;