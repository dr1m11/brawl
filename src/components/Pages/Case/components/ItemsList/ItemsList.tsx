'use client'
import InCaseGun from "@/components/InCaseGun/InCaseGun";
import styles from "./ItemsList.module.css"
import {useQuery} from "@tanstack/react-query";
import {caseService} from "@/services/case/case.service";
import {useAppDispatch} from "@/lib/hooks";
import {useEffect} from "react";
import {setCase, setFast, setIsFinished, setIsOpened, setItems} from "@/lib/caseSlice/caseSlice";
const ItemsList = () => {

    const {data, isSuccess} = useQuery({
        queryKey: ["get-case-items"],
        queryFn: () => caseService.getItems()
    })

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (isSuccess) {
            dispatch(setItems(data.items))
            dispatch(setCase(data))
        }
    }, [isSuccess]);

    useEffect(() => {
        return () => {
            dispatch(setIsFinished(false))
            dispatch(setIsOpened(false))
            dispatch(setFast(false))
        }
    }, []);

    return (
        <div className={styles.content}>
            {isSuccess && data.items.length &&
                data.items.map(({name, id, rarity, price}) => (
                    <InCaseGun key={id} name={name} rarity={rarity} price={price} id={id}/>
                ))
            }
        </div>
    );
};

export default ItemsList;