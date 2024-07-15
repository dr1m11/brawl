'use client'
import styles from './ProfileItem.module.css';
import Image from "next/image";
import Gun from "../../../public/CasePage/Gun.svg";
import {useAppSelector} from "@/lib/hooks";
import {itemService} from "@/services/item/item.service";
import {useQueryClient} from "@tanstack/react-query";

interface ProfileItemProps {
    title: string
    price: number
    rarity: number
    id: number
    userId: string
}

const ProfileItem = ({title, rarity, price, id, userId}: ProfileItemProps) => {

    const queryClient = useQueryClient()
    async function sellItem() {
        await itemService.sellItem(userId, id)
        queryClient.invalidateQueries({
            queryKey: ['user']
        })
    }

    return (
        <div className={styles.root}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.desc}>дополнительное место</h2>
            <Image src={Gun} alt={'Gun'} width={141} height={95} className={styles.gun}/>
            <div className={styles.shadow} style={{background: rarity === 12 ? "#fc4235" : rarity === 10 ? '#E298FFFF' : '#3841A2FF'}}/>
            <div className={styles.info}>
                <button className={styles.sell} onClick={sellItem}>Продать</button>
                <span className={styles.price}>{price} RUB</span>
            </div>
        </div>
    );
};

export default ProfileItem;