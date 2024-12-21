'use client'
import styles from './WithdrawMethods.module.css'
import WithdrawCard from "@/components/Pages/Withdraw/components/WithdrawCard/WithdrawCard";
import GemsCard from "@/components/Pages/Withdraw/components/GemsCard/GemsCard";
import {useQuery} from "@tanstack/react-query";
import {axiosClassic} from "@/api/axios";
import {useAppSelector} from "@/lib/hooks";

const WithdrawMethods = () => {

    const {data, isSuccess} = useQuery({
        queryKey: ['get-gems-price'],
        queryFn: () => axiosClassic.get('/gems-prices')
    })

    const {isGameSelected} = useAppSelector(state => state.withdraw)

    
    return (
        <div className={styles.payment__info}>
            <div className={styles.payment__methods}>
                <WithdrawCard/>
            </div>
            <div className={styles.gems}>
                {
                    (isSuccess && isGameSelected) ?
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    data.data.map((item) => (
                        <GemsCard key={item.id} position={item.position} img={item.photo} price={item.price}/>
                    ))
                        :
                        <p className={styles.alert}>Пожалуйста, выберите игру</p>
                }
            </div>
        </div>
    );
};

export default WithdrawMethods;