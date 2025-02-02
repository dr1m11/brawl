'use client'
import styles from './ProfileItem.module.css';
import Image from "next/image";
import {itemService} from "@/services/item/item.service";
import {useQueryClient} from "@tanstack/react-query";
import {useState} from "react";
import {TailSpin} from "react-loader-spinner";
import PriceIcon from "@/components/PriceIcon/PriceIcon";

interface ProfileItemProps {
    title: string
    price: number
    id: number
    userId: string
    photo_link: string
    color: string
    sold: boolean
}

const ProfileItem = ({title, price, id, userId, color, photo_link, sold}: ProfileItemProps) => {
    const [isLoading, setIsLoading] = useState(false)

    const queryClient = useQueryClient()
    async function sellItem() {
        setIsLoading(true)
        try {
            await itemService.sellItem(userId, id)
            queryClient.invalidateQueries({
                queryKey: ['user']
            })
        } catch {
            alert('Произошла ошибка удаления')
        }
        setIsLoading(false)
    }

    return (
        <div className={styles.root} style={{opacity: sold ? 0.5 : undefined}}>
            <h1 className={styles.title}>{title}</h1>
            {photo_link && <Image src={photo_link} alt={'Gun'} width={110} height={70} className={styles.gun}/>}
            <div className={styles.shadow} style={{background: color}}/>
            <div className={styles.info}>
                <button className={styles.sell} onClick={sellItem} disabled={sold} style={{opacity: sold ? 0 : undefined}}>{
                    isLoading ?
                        <TailSpin
                            visible={true}
                            height="24"
                            width="24"
                            color="#492e80"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                        />
                        :
                        'Продать'
                }
                </button>
                <span className={styles.price}>{price} <PriceIcon/></span>
            </div>
        </div>
    );
};

export default ProfileItem;