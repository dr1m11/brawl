'use client'
import styles from './Info.module.css'
import InfoColumn from "@/components/Pages/Wheel/components/InfoColumn/InfoColumn";
import {useAppSelector} from "@/lib/hooks";


const Info = () => {
    const {bet2, bet3, bet5, bet10, bet100} = useAppSelector(state => state.wheel.userBets)
    return (
        <div className={styles.info}>
            <InfoColumn users={bet2} bet={2}/>
            <InfoColumn users={bet3} bet={3}/>
            <InfoColumn users={bet5} bet={5}/>
            <InfoColumn users={bet10} bet={10}/>
            <InfoColumn users={bet100} bet={100}/>
        </div>
    );
};

export default Info;