'use client'
import styles from './CaseOpenBtn.module.css'
import {caseService} from "@/services/case/case.service";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {randomInteger} from "@/components/Pages/Case/components/Roulette/Roulette";
import {setIsOpened, setRoulette} from "@/lib/caseSlice/caseSlice";
import {useQuery, useQueryClient} from "@tanstack/react-query";

const CaseOpenBtn = () => {
    const {items, caseData} = useAppSelector(state => state.case)
    const balance = useAppSelector(state => state.user.balance)

    const queryClient = useQueryClient()

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
        const data = await caseService.caseOpen()
        await queryClient.invalidateQueries({
            queryKey: ['user']
        })
        dispatch(setRoulette(fillArray(data)))
        dispatch(setIsOpened(true))
    }

    return (
        <button onClick={openCase} className={styles.root} disabled={!((balance - caseData.price) >= 0)}>
            Открыть
        </button>
    );
};

export default CaseOpenBtn;