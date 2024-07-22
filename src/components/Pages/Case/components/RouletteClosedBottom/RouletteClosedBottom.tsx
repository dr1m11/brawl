import styles from './RouletteClosedBottom.module.css'
import CasesCount from "@/components/Pages/Case/components/CasesCount/CasesCount";
import CaseOpenBtn from "@/components/Pages/Case/components/CaseOpenBtn/CaseOpenBtn";
import CaseRadio from "@/components/Pages/Case/components/CaseRadio/CaseRadio";
import {useAppSelector} from "@/lib/hooks";
const RouletteClosedBottom = () => {
    return (
        <div className={styles.roulette__closed__bottom}>
            <div className={styles.case__bottom__wrapper}>
                <CasesCount/>
                <CaseOpenBtn/>
                <CaseRadio/>
            </div>
        </div>
    );
};

export default RouletteClosedBottom;