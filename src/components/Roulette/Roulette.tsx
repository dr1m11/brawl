'use client'
import styles from "./Roulette.module.css";
import Image from "next/image";
import BG from "../../../public/CasePage/BG.svg";
import Gun from "../../../public/CasePage/Gun.svg";
import CasesCount from "@/components/CasesCount/CasesCount";
import CaseOpenBtn from "@/components/CaseOpenBtn/CaseOpenBtn";
import CaseRadio from "@/components/CaseRadio/CaseRadio";
import {useState} from "react";
import RouletteItem from "@/components/RouletteItem/RouletteItem";
import triangle from '@/../public/CasePage/Triangle.svg'

const Roulette = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [fast, setFast] = useState(false)

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

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
                            <div className={styles.spin} style={{transform: isOpened ? `translateX(${randomInteger(-7750, -7600)}px)` : null, transitionDuration: fast ? '2.5s' : null }}>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem key={'1'}/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                                <RouletteItem/>
                            </div>
                        </div>
                        <Image src={triangle} alt={'Triangle'} width={33} height={43} style={{transform: 'rotateZ(180deg)'}}/>
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
                                <CaseOpenBtn setIsOpened={setIsOpened}/>
                                <CaseRadio setFast={setFast} fast={fast}/>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
        ;
};

export default Roulette;