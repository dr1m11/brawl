import BG from '@/../public/Profile/BG.svg'
import BestGun from '@/../public/Profile/BestGun.svg'
import UserIcon from '@/../public/Profile/UserIcon.svg'
import Image from "next/image";
import styles from './Profile.module.css'
import {Manrope} from "next/font/google";
import clsx from "clsx";
import ProfileItem from "@/components/ProfileItem/ProfileItem";
import LogoutButton from "@/components/LogoutButton/LogoutButton";
import ProfileData from "@/components/ProfileData/ProfileData";
import ProfileItems from "@/components/ProfileItems/ProfileItems";


const manrope = Manrope({subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700']})
const Profile = () => {
    return (
        <div className={clsx(styles.root, manrope.className)}>
            <Image src={BG} alt={'Background'} width={1435} height={876} className={styles.bg}/>
            <div className={styles.top__left__shadow}/>
            <div className={styles.top__right__shadow}/>
            <div className={styles.content}>
                <LogoutButton />
                <div className={styles.profile__header}>
                    <ProfileData />
                    <div className={styles.header__right}>
                        <div className={styles.best__item}>
                            <h3 className={styles.best__title}>Лучший предмет</h3>
                            <h5 className={styles.best__desc}>Название предмет...</h5>
                            <p className={styles.price}>345 RUB</p>
                            <Image src={BestGun} alt={'Gun'} width={139} height={93} className={styles.best__gun}/>
                        </div>
                        <h3 className={styles.sell__all}>Продать все</h3>
                    </div>
                </div>
                <ProfileItems />
            </div>
        </div>
    );
};

export default Profile;