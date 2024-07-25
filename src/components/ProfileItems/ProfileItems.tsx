'use client'
import styles from './ProfileItems.module.css'
import ProfileItem from "@/components/ProfileItem/ProfileItem";
import {useQuery} from "@tanstack/react-query";
import {useAppSelector} from "@/lib/hooks";
import {userService} from "@/services/user/user.service";
import {IGun} from "@/services/case/case.types";
const ProfileItems = () => {

    const {id, items} = useAppSelector(state => state.user)

    return (
        <div className={styles.items}>
            {!!items &&
                items.map(({name, price, user_item_id, photo_link, color}: IGun, index) => (
                    <ProfileItem key={index} title={name} price={price} id={user_item_id} userId={id} color={color} photo_link={photo_link}/>
                ))
            }
        </div>
    );
};

export default ProfileItems;