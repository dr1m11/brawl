'use client'
import styles from './ProfileButton.module.css'
import Image from "next/image";
import Avatar from "@/../public/Header/Avatar.svg"
import Link from "next/link";

const ProfileButton = () => {


    return (
        <Link href={'/profile'} className={styles.root}>
            <h2 className={styles.nickname}>Timosopia</h2>
            <div className={styles.balance}>
                <h5 className={styles.numbers}>600</h5>
                <h5 className={styles.value}>RUB</h5>
            </div>
            <Image src={Avatar} alt={'Avatar'} width={42} height={42}/>
        </Link>
    );
};

export default ProfileButton;