'use client'
import styles from './ProfileItems.module.css'
import ProfileItem from "@/components/ProfileItem/ProfileItem";
import {useAppSelector} from "@/lib/hooks";
import {IGun} from "@/services/case/case.types";
const ProfileItems = () => {

    const {id, items} = useAppSelector(state => state.user)

    return (
        <div className={styles.items}>
            {!!items &&
                items.map(({name, price, user_item_id, photo_link, color, sold}: IGun, index) => (
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    <ProfileItem key={index} title={name} price={price} id={user_item_id} userId={id} color={color} photo_link={photo_link} sold={sold}/>
                ))
            }
        </div>
    );
};

export default ProfileItems;