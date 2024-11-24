'use client'
import InCaseGun from "@/components/InCaseGun/InCaseGun";
import styles from "./ItemsList.module.css"
import {caseService} from "@/services/case/case.service";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {useEffect} from "react";
import {
    setCase,
    setFast,
    setIsFinished,
    setIsOpened,
    setItems,
    setRoulette,
    setWinedItem
} from "@/lib/caseSlice/caseSlice";
import {useParams, useRouter} from "next/navigation";

const ItemsList = () => {

    const params = useParams()
    const router = useRouter()
    const dispatch = useAppDispatch()

    useEffect(() => {
        caseService.getItems(params.cases)
            .then((data) => {
                dispatch(setItems(data.items))
                dispatch(setCase(data))
            })
            .catch(() => {
                router.push('/')
            })
    }, [dispatch, params.cases, router]);

    const {items} = useAppSelector(state => state.case)

    useEffect(() => {
        return () => {
            dispatch(setWinedItem(null))
            dispatch(setRoulette(null))
            dispatch(setIsFinished(false))
            dispatch(setIsOpened(false))
            dispatch(setFast(false))
            dispatch(setItems([]))
            dispatch(setCase({
                price: 0,
                items: [],
                name: '',
                id: 0
            },))
        }
    }, [dispatch]);

    return (
        <div className={styles.content}>
            {!!items.length &&
                items.map(({name, id, price, photo_link, color}) => (
                    <InCaseGun color={color} photo_link={photo_link} key={id} name={name} price={price} id={id}/>
                ))
            }
        </div>
    );
};

export default ItemsList;