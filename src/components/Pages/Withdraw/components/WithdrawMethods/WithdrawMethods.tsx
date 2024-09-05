'use client'
import styles from './WithdrawMethods.module.css'
import WithdrawCard from "@/components/Pages/Withdraw/components/WithdrawCard/WithdrawCard";
import GemsCard from "@/components/Pages/Withdraw/components/GemsCard/GemsCard";
import Gems1 from '../../../../../../public/Withdraw/Gems1.png'
import Gems2 from '../../../../../../public/Withdraw/Gems2.png'
import Gems3 from '../../../../../../public/Withdraw/Gems3.png'
import Gems4 from '../../../../../../public/Withdraw/Gems4.png'
import Gems5 from '../../../../../../public/Withdraw/Gems5.png'
import Gems6 from '../../../../../../public/Withdraw/Gems6.png'
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
                    data.data.map((item) => (
                        <GemsCard key={item.id} position={item.position} img={item.photo} price={item.price}/>
                    ))
                }
            </div>
        </div>
    );
};

export default WithdrawMethods;