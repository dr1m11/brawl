import BG from '@/../public/Profile/BG.svg'
import BestGun from '@/../public/Profile/BestGun.svg'
import Image from "next/image";
import styles from './ProfilePage.module.css'
import {Manrope} from "next/font/google";
import clsx from "clsx";
import LogoutButton from "@/components/LogoutButton/LogoutButton";
import ProfileData from "@/components/ProfileData/ProfileData";
import ProfileItems from "@/components/ProfileItems/ProfileItems";
import HeaderRight from "@/components/Pages/Profile/components/HeaderRight/HeaderRight";


const manrope = Manrope({subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700']})
export const ProfilePage = () => {
    return (
        <div className={clsx(styles.root, manrope.className)}>
            <Image src={BG} alt={'Background'} width={1435} height={876} className={styles.bg}/>
            <div className={styles.top__left__shadow}/>
            <div className={styles.top__right__shadow}/>
            <div className={styles.content}>
                <LogoutButton />
                <div className={styles.profile__header}>
                    <ProfileData />
                    <HeaderRight />
                </div>
                <ProfileItems />
            </div>
        </div>
    );
};