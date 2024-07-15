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

    const userId = useAppSelector(state => state.user.id)

    console.log(data?.items)


    return (
        <div className={styles.items}>
            {isSuccess && !!data.items &&
                data.items.map(({name, price, rarity, user_item_id}: IGun, index) => (
                    <ProfileItem key={index} title={name} rarity={rarity} price={price} id={user_item_id} userId={userId}/>
                ))
            }
        </div>
    );
};

export default ProfileItems;