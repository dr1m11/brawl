'use client'
import styles from './CaseOpenBtn.module.css'
import {caseService} from "@/services/case/case.service";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {randomInteger} from "@/components/Pages/Case/components/Roulette/Roulette";
import {setIsOpened, setRoulette, setWinedItem} from "@/lib/caseSlice/caseSlice";
import {useQueryClient} from "@tanstack/react-query";
import {useState} from "react";
import {TailSpin} from "react-loader-spinner";
import PriceIcon from "@/components/PriceIcon/PriceIcon";
import useSound from "use-sound";
import {changeLogin} from "@/lib/defaultSlice/defaultSlice";

const CaseOpenBtn = () => {
    const {items, caseData, isOpenDisabled} = useAppSelector(state => state.case)
    const {balance, id} = useAppSelector(state => state.user)
    const [isLoading, setIsLoading] = useState(false)

    const [play] = useSound('/sounds/case/open.mp3')

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
        setIsLoading(true)
        const data = await caseService.caseOpen(caseData.id)
        await queryClient.invalidateQueries({
            queryKey: ['user']
        })
        play()
        dispatch(setWinedItem(data.user_item_id))
        dispatch(setRoulette(fillArray(data.wined_item)))
        dispatch(setIsOpened(true))
        setIsLoading(false)
    }

    return (
        !!id ?
            <button onClick={openCase} className={styles.root}
                    disabled={(!((balance - caseData.price) >= 0)) || isOpenDisabled}
                    style={{justifyContent: isLoading && 'center'}}>
                {
                    isLoading ?
                        <TailSpin
                            visible={true}
                            height="24"
                            width="24"
                            color="#FFF"
                            ariaLabel="tail-spin-loading"
                            radius="2"
                        />
                        :
                        <>
                            <h5>Открыть за</h5>
                            <span
                                className={styles.bet__btn__label}>{caseData.price} <PriceIcon/></span>
                        </>
                }
            </button>
            :
            <button
                className={styles.root}
                style={{
                    background: 'rgba(10,110,34,0.85)',
                    border: 'none',
                    justifyContent: 'center'
                }}
                onClick={() => dispatch(changeLogin())}
            >
                ВОЙТИ
            </button>
    );
};

export default CaseOpenBtn;