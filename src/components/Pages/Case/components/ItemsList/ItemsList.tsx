'use client'
import InCaseGun from "@/components/InCaseGun/InCaseGun";
import styles from "./ItemsList.module.css"
import {useQuery} from "@tanstack/react-query";
import {caseService} from "@/services/case/case.service";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {useEffect} from "react";
import {setCase, setFast, setIsFinished, setIsOpened, setItems} from "@/lib/caseSlice/caseSlice";
import {useParams, useRouter} from "next/navigation";
const ItemsList = () => {

    const params = useParams()


    useEffect(() => {
        caseService.getItems(params.cases)
            .then((data) => {
            dispatch(setItems(data.items))
            dispatch(setCase(data))
        })
            .catch((e) => {
                console.log(e)
            })
    }, []);

    const {items, caseData} = useAppSelector(state => state.case)
    const dispatch = useAppDispatch()

    useEffect(() => {
        return () => {
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
    }, []);

    return (
        <div className={styles.content}>
            {items.length &&
                items.map(({name, id, rarity, price, photo_link}) => (
                    <InCaseGun photo_link={photo_link} key={id} name={name} rarity={rarity} price={price} id={id}/>
                ))
            }
        </div>
    );
};

export default ItemsList;