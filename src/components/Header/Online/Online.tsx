'use client'
import styles from './Online.module.css'
import Image from "next/image";
import OnlineImg from '@/../public/static/Header/Online.svg'
import {useQuery} from "@tanstack/react-query";
import {axiosClassic} from "@/api/axios";

const Online = () => {

    const online = useQuery({
        queryKey: ['online'],
        queryFn: () => axiosClassic.get('/online'),
        refetchInterval: 30000
    })

    return (
        <div className={styles.header__right__content}>
            <div className={'flex'}>
                <Image src={OnlineImg} alt={"Online"} width={17.5} height={20}/>
                {online.isSuccess && <h6 className={styles.header__right__count}>{online.data.data}</h6>}
            </div>
            <span className={styles.header__right__heading}>в онлайне</span>
        </div>
    );
};

export default Online;