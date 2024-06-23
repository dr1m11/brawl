import styles from './ProfileItem.module.css';
import Image from "next/image";
import Gun from "../../../public/CasePage/Gun.svg";

interface ProfileItemProps {
    title: string
    price: number
    rarity: number
}

const ProfileItem = ({title, rarity, price}: ProfileItemProps) => {
    return (
        <div className={styles.root}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.desc}>дополнительное место</h2>
            <Image src={Gun} alt={'Gun'} width={141} height={95} className={styles.gun}/>
            <div className={styles.shadow} style={{background: rarity === 12 ? "#fc4235" : rarity === 10 ? '#E298FFFF' : '#3841A2FF'}}/>
            <div className={styles.info}>
                <button className={styles.sell}>Продать</button>
                <span className={styles.price}>{price} RUB</span>
            </div>
        </div>
    );
};

export default ProfileItem;