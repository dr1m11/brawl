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

    // const {data, isSuccess, error, isLoading, refetch} = useQuery({
    //     queryKey: ["get-case-items"],
    //     queryFn: () => caseService.getItems(params.cases),
    //     staleTime: 0,
    // })

    const router = useRouter()

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

    // useEffect(() => {
    //     // @ts-ignore
    //     if (error?.response.status === 500)
    //         router.push('/')
    // }, [error]);

    const {items, caseData} = useAppSelector(state => state.case)
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     if (isSuccess) {
    //         dispatch(setItems(data.items))
    //         dispatch(setCase(data))
    //     }
    // }, [isSuccess]);

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

    // if (isLoading)
    //     return null

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