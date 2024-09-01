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
const WithdrawMethods = () => {
    return (
        <div className={styles.payment__info}>
            <div className={styles.payment__methods}>
                <WithdrawCard/>
            </div>
            <div className={styles.gems}>
                <GemsCard value={'30 gems'} img={Gems1}/>
                <GemsCard value={'80 gems'} img={Gems2}/>
                <GemsCard value={'170 gems'} img={Gems3}/>
                <GemsCard value={'360 gems'} img={Gems4}/>
                <GemsCard value={'950 gems'} img={Gems5}/>
                <GemsCard value={'2000 gems'} img={Gems6}/>
            </div>
        </div>
    );
};

export default WithdrawMethods;