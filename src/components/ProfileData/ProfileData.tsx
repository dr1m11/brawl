'use client'
import styles from './ProfileData.module.css'
import localFont from "next/font/local";
import clsx from "clsx";
import Image from "next/image";
import { useAppSelector} from "@/lib/hooks";
import PriceIcon from "@/components/PriceIcon/PriceIcon";

const daysOne = localFont({src: '../../Fonts/DaysOne-Regular.ttf'});

const ProfileData = () => {
    const {username, balance, photo} = useAppSelector(state => state.user)

    return (
        <div className={styles.header__left}>
            {photo && <Image src={photo} alt={'Avatar'} width={111} height={111} className={styles.user__icon}/>}
            <div className={styles.header__left__content}>
                <h2 className={clsx(daysOne.className, styles.username)}>{username}</h2>
                <div className={styles.header__left__buttons}>
                    <div className={styles.balance}>{balance} <PriceIcon/></div>
                </div>
            </div>
        </div>
    );
};

export default ProfileData;