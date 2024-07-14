import styles from './RouletteOpened.module.css'
import Image from "next/image";
import triangle from "../../../../../../public/CasePage/Triangle.svg";
import Spinner from "@/components/Pages/Case/components/Spinner/Spinner";
import AfterSpin from "@/components/Pages/Case/components/AfterSpin/AfterSpin";
const RouletteOpened = () => {

    return (
        <div className={styles.roulette__opened}>
            <Image src={triangle} alt={'Triangle'} width={33} height={43}/>
            <div className={styles.roulette__wrapper}>
                <div/>
                <Spinner />
            </div>
            <Image src={triangle} alt={'Triangle'} width={33} height={43}
                   style={{transform: 'rotateZ(180deg)'}}/>
            <AfterSpin />
        </div>
    );
};

export default RouletteOpened;