import styles from './ProfileItem.module.css';
import Image from "next/image";
import Gun from "../../../public/CasePage/Gun.svg";


const ProfileItem = () => {
    return (
        <div className={styles.root}>
            <h1 className={styles.title}>Название</h1>
            <h2 className={styles.desc}>дополнительное место</h2>
            <Image src={Gun} alt={'Gun'} width={141} height={95} className={styles.gun}/>
            <div className={styles.shadow}/>
            <div className={styles.info}>
                <button className={styles.sell}>Продать</button>
                <span className={styles.price}>355 RUB</span>
            </div>
        </div>
    );
};

export default ProfileItem;