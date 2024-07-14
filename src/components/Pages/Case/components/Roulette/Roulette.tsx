'use client'
import styles from "./Roulette.module.css";
import Image from "next/image";
import BG from "@/../public/CasePage/BG.svg";
import {useAppSelector} from "@/lib/hooks";
import RouletteOpened from "@/components/Pages/Case/components/RouletteOpened/RouletteOpened";
import RouletteClosed from "@/components/Pages/Case/components/RouletteClosed/RouletteClosed";

export function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


const Roulette = () => {
    const {isOpened} = useAppSelector(state => state.case)

    return (
        <div className={styles.open__wrapper}>
            <Image src={BG} alt={'Background'} width={1058} height={330} className={styles.background__img}/>
            {
                isOpened
                    ?
                    <RouletteOpened />
                    :
                    <RouletteClosed />
            }
        </div>
    )
        ;
};

export default Roulette;