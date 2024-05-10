import BG from '@/../public/Profile/BG.svg'
import Logout from '@/../public/Profile/Logout.svg'
import BestGun from '@/../public/Profile/BestGun.svg'
import UserIcon from '@/../public/Profile/UserIcon.svg'
import Wallet from '@/../public/Profile/Wallet.svg'
import Image from "next/image";
import styles from './Profile.module.css'
import {Manrope} from "next/font/google";
import clsx from "clsx";
import localFont from "next/font/local";
import ProfileItem from "@/components/ProfileItem/ProfileItem";


const daysOne = localFont({src: '../../Fonts/DaysOne-Regular.ttf'});
const manrope = Manrope({subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700']})
const Profile = () => {
    return (
        <div className={clsx(styles.root, manrope.className)}>
            <Image src={BG} alt={'Background'} width={1435} height={876} className={styles.bg}/>
            <div className={styles.top__left__shadow}/>
            <div className={styles.top__right__shadow}/>
            <div className={styles.content}>
                <button className={styles.logout}><Image src={Logout} alt={'Logout'} width={18} height={17}/>Выйти
                </button>
                <div className={styles.profile__header}>
                    <div className={styles.header__left}>
                        <Image src={UserIcon} alt={'Avatar'} width={111} height={111} className={styles.user__icon}/>
                        <div className={styles.header__left__content}>
                            <h2 className={clsx(daysOne.className, styles.username)}>Timosopia</h2>
                            <div className={styles.header__left__buttons}>
                                <button className={styles.wallet}><Image src={Wallet} alt={'Wallet'} width={18}
                                                                         height={18}/></button>
                                <button className={styles.balance}>255 RUB</button>
                            </div>
                        </div>
                    </div>
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
                <div className={styles.items}>
                    <ProfileItem />
                    <ProfileItem />
                    <ProfileItem />
                    <ProfileItem />
                    <ProfileItem />
                    <ProfileItem />
                    <ProfileItem />
                    <ProfileItem />
                    <ProfileItem />
                </div>
            </div>
        </div>
    );
};

export default Profile;