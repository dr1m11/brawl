'use client'
import Logout from '@/../public/Profile/Logout.svg'
import styles from './LogoutButton.module.css'
import Image from "next/image";
import {removeFromStorage} from "@/services/auth/auth.helper";

const LogoutButton = () => {
    return (
        <button className={styles.logout} onClick={() => {
            removeFromStorage()
            localStorage.clear()
            location.reload()
        }}><Image src={Logout} alt={'Logout'} width={18} height={17}/>
            Выйти
        </button>
    );
};

export default LogoutButton;