'use client'
import styles from './ProfileItems.module.css'
import ProfileItem from "@/components/ProfileItem/ProfileItem";
import {useQuery} from "@tanstack/react-query";
import {useAppSelector} from "@/lib/hooks";
import {userService} from "@/services/user/user.service";
import {IGun} from "@/services/case/case.types";
const ProfileItems = () => {

    const {data, isSuccess, isPending, isError, error} = useQuery({
        queryKey: ['getUser'],
        queryFn: userService.getUserById
    })


    return (
        <div className={styles.items}>
            {isSuccess &&
                data.items.map(({name, price, rarity}: IGun, index) => (
                    <ProfileItem key={index} title={name} rarity={rarity} price={price}/>
                ))
            }
        </div>
    );
};

export default ProfileItems;