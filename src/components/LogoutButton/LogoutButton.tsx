'use client'
import Logout from '@/../public/Profile/Logout.svg'
import styles from './LogoutButton.module.css'
import Image from "next/image";
import {removeFromStorage} from "@/services/auth/auth.helper";
import {axiosClassic} from "@/api/axios";

const LogoutButton = () => {
    // const createItem = async () => {
    //     const res = await axiosClassic({
    //         method: "POST",
    //         url: "/case/create",
    //         data: {
    //             name: "Оружейный",
    //             price: 300,
    //             items: [
    //                 {
    //                     item_id: 1,
    //                     weight: 5
    //                 }
    //             ]
    //         }
    //     })
    //     console.log(res.data)
    // }

    return (
        <button className={styles.logout} onClick={() => {
            removeFromStorage()
            localStorage.clear()
            // location.reload()
        }}><Image src={Logout} alt={'Logout'} width={18} height={17}/>
            Выйти
        </button>
    );
};

export default LogoutButton;