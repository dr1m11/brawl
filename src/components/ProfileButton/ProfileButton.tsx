'use client'
import styles from './ProfileButton.module.css'
import Image from "next/image";
import Link from "next/link";
import {useAppSelector} from "@/lib/hooks";
import PriceIcon from "@/components/PriceIcon/PriceIcon";

const ProfileButton = () => {
    const {username, balance, photo} = useAppSelector(state => state.user)

    return (
        <Link href={'/profile'} className={styles.root}>
            <h2 className={styles.nickname}>{username}</h2>
            <div className={styles.balance}>
                <h5 className={styles.numbers}>{balance}</h5>
                <h5 className={styles.value}><PriceIcon width={16} height={16}/></h5>
            </div>
            {!!photo && <Image src={photo} alt={'Avatar'} width={42} height={42} className={styles.photo} priority={true}/>}
        </Link>
    );
};

export default ProfileButton;