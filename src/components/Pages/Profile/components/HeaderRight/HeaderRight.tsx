'use client'
import styles from './HeaderRight.module.css'
import Image from "next/image";
import {useAppSelector} from "@/lib/hooks";
import PriceIcon from "@/components/PriceIcon/PriceIcon";

const HeaderRight = () => {
    const bestItem = useAppSelector(state => state.user.best_item)

    return (
        <div className={styles.header__right} style={{justifyContent: bestItem?.id ? 'end' : undefined}}>
            { !!bestItem?.id &&
                <div className={styles.best__item}>
                    <h3 className={styles.best__title}>Лучший предмет</h3>
                    <h5 className={styles.best__desc}>{bestItem.name}</h5>
                    <p className={styles.price}>{bestItem.price} <PriceIcon/></p>
                    <Image src={bestItem.photo_link ?? ''} alt={'Gun'} width={139} height={93}
                                          className={styles.best__gun}/>
                </div>
            }
            {/*<h3 className={styles.sell__all} onClick={async () => {*/}
            {/*    await axiosAuth.get('/authenticated/user/sell-all-items')*/}
            {/*    queryClient.invalidateQueries({queryKey: ['user']})*/}
            {/*}}>Продать все</h3>*/}
        </div>
    );
};

export default HeaderRight;