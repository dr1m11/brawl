import styles from './HomePage.module.css'
import Image from "next/image";
import mainBg from '@/../public/static/Home/Main.png'
import footerBg from '@/../public/static/Home/Footer.png'
import Carousels from "@/components/Pages/HomePage/components/Carousels/Carousels";
import {Cases} from "@/components/Pages/HomePage/components/Cases/Cases";


const HomePage = () => {
    return (
        <div className={styles.main}>
            <Image src={mainBg} alt={"Background"} height={820} width={1435} className={styles.main__img} quality={100}/>
            <div className={styles.content}>
                <Carousels />
                <Cases />
            </div>
            <Image src={footerBg} alt={"Background"} height={820} width={1435} className={styles.bottom__img} quality={100}/>
        </div>
    );
};

export default HomePage;