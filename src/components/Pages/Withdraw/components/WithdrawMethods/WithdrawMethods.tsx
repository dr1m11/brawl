'use client'
import styles from './WithdrawMethods.module.css'
import WithdrawCard from "@/components/Pages/Withdraw/components/WithdrawCard/WithdrawCard";
import GemsCard from "@/components/Pages/Withdraw/components/GemsCard/GemsCard";
import {useQuery} from "@tanstack/react-query";
import {axiosClassic} from "@/api/axios";

const WithdrawMethods = () => {

    const {data, isSuccess} = useQuery({
        queryKey: ['get-gems-price'],
        queryFn: () => axiosClassic.get('/gems-prices')
    })

    
    return (
        <div className={styles.payment__info}>
            <div className={styles.payment__methods}>
                <WithdrawCard/>
            </div>
            <div className={styles.gems}>
                {
                    isSuccess &&
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    data.data.map((item) => (
                        <GemsCard key={item.id} position={item.position} img={item.photo} price={item.price}/>
                    ))
                }
            </div>
        </div>
    );
};

export default WithdrawMethods;