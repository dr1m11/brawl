import styles from './Info.module.css'
import InfoColumn from "@/components/Pages/Wheel/components/InfoColumn/InfoColumn";


const Info = () => {
    return (
        <div className={styles.info}>
            <InfoColumn />
            <InfoColumn />
            <InfoColumn />
            <InfoColumn />
            <InfoColumn />
        </div>
    );
};

export default Info;