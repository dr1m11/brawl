'use client'
import styles from './CaseOpenBtn.module.css'
import {caseService} from "@/services/case/case.service";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {randomInteger} from "@/components/Pages/Case/components/Roulette/Roulette";
import {setIsOpened, setRoulette, setWinedItem} from "@/lib/caseSlice/caseSlice";
import {useQueryClient} from "@tanstack/react-query";

const CaseOpenBtn = () => {
    const {items, caseData, isOpenDisabled} = useAppSelector(state => state.case)
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

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const openCase = async () => {
        const data = await caseService.caseOpen(caseData.id)
        await queryClient.invalidateQueries({
            queryKey: ['user']
        })
        dispatch(setRoulette(fillArray(data.wined_item)))
        dispatch(setIsOpened(true))
        dispatch(setWinedItem(data.user_item_id))
    }

    return (
        <button onClick={openCase} className={styles.root}
                disabled={(!((balance - caseData.price) >= 0)) || isOpenDisabled}>
            <h5>Открыть за</h5>
            <span
                className={styles.bet__btn__label}>{caseData.price} RUB</span>
        </button>
    );
};

export default CaseOpenBtn;