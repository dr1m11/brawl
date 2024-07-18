import styles from './RouletteClosed.module.css'
import Image from "next/image";
import Gun from "../../../../../../public/CasePage/Gun.svg";
import RouletteClosedBottom from "@/components/Pages/Case/components/RouletteClosedBottom/RouletteClosedBottom";

const RouletteClosed = ({photo_link}: {photo_link: string}) => {
    return (
        <div className={styles.roulette__closed}>
            <div className={styles.roulette__closed__center}>
                <div className={styles.purp__shadow}/>
                <div className={styles.orange__shadow}/>
                {photo_link && <Image src={photo_link} alt={'Gun'} width={216} height={145} className={styles.center__gun} priority={true}/>}
            </div>
            <RouletteClosedBottom />
        </div>
    );
};

export default RouletteClosed;