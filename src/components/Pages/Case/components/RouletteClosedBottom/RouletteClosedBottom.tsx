'use client'
import styles from './RouletteClosedBottom.module.css'
import CasesCount from "@/components/Pages/Case/components/CasesCount/CasesCount";
import CaseOpenBtn from "@/components/Pages/Case/components/CaseOpenBtn/CaseOpenBtn";
import CaseRadio from "@/components/Pages/Case/components/CaseRadio/CaseRadio";
import {useAppSelector} from "@/lib/hooks";
const RouletteClosedBottom = () => {
    const price = useAppSelector(state => state.case.caseData.price)
    return (
        <div className={styles.roulette__closed__bottom}>
            <h3 className={styles.case__price}>{price} RUB</h3>
            <div className={styles.case__bottom__wrapper}>
                <CasesCount/>
                <CaseOpenBtn/>
                <CaseRadio/>
            </div>
        </div>
    );
};

export default RouletteClosedBottom;