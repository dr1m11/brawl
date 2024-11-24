import styles from './RouletteClosedBottom.module.css'
import CasesCount from "@/components/Pages/Case/components/CasesCount/CasesCount";
import CaseOpenBtn from "@/components/Pages/Case/components/CaseOpenBtn/CaseOpenBtn";
import CaseRadio from "@/components/Pages/Case/components/CaseRadio/CaseRadio";
const RouletteClosedBottom = () => {
    return (
        <div className={styles.roulette__closed__bottom}>
            <div className={styles.case__bottom__wrapper}>
                <CasesCount/>
                <div className={styles.high__res}>
                    <CaseOpenBtn/>
                </div>
                <CaseRadio/>
            </div>
            <div className={styles.low__res}>
                <CaseOpenBtn/>
            </div>
        </div>
    );
};

export default RouletteClosedBottom;