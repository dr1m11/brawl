'use client'
import styles from './CaseOpenBtn.module.css'
import {caseService} from "@/services/case/case.service";
import {useAppSelector} from "@/lib/hooks";
import {randomInteger} from "@/components/Pages/Case/components/Roulette/Roulette";

interface CaseOpenBtnProps {
    setIsOpened: (flag: boolean) => void
    setRoulette: (arr: any[]) => void
}

const CaseOpenBtn = ({setIsOpened, setRoulette}: CaseOpenBtnProps) => {
    const items = useAppSelector(state => state.case.items)

    const fillArray = (win) => {
        const arr = []
        for (let i = 0; i < 52; i++) {
            if (i !== 48) {
                arr.push(items[randomInteger(0, items.length - 1)])
            } else {
                arr.push(win)
            }
        }
        return arr
    }

    const openCase = async () => {
        const winItem = await caseService.caseOpen()
        setRoulette(fillArray(winItem))
        setIsOpened(true)
    }

    return (
        <button onClick={openCase} className={styles.root}>
            Открыть
        </button>
    );
};

export default CaseOpenBtn;