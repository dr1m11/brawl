'use client'
import styles from './CaseOpenBtn.module.css'
import {caseService} from "@/services/case/case.service";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {randomInteger} from "@/components/Pages/Case/components/Roulette/Roulette";
import {setIsOpened, setRoulette} from "@/lib/caseSlice/caseSlice";

const CaseOpenBtn = () => {
    const items = useAppSelector(state => state.case.items)

    const dispatch = useAppDispatch()

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
        dispatch(setRoulette(fillArray(winItem)))
        dispatch(setIsOpened(true))
    }

    return (
        <button onClick={openCase} className={styles.root}>
            Открыть
        </button>
    );
};

export default CaseOpenBtn;