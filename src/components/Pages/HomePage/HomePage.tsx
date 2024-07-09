import styles from './HomePage.module.css'
import Image from "next/image";
import mainBg from '@/../public/Home/Main.svg'
import footerBg from '@/../public/Home/Footer.svg'
import Carousels from "@/components/Pages/HomePage/components/Carousels/Carousels";
import CaseSection from "@/components/Pages/HomePage/components/CaseSection/CaseSection";


const HomePage = () => {
    return (
        <div className={styles.main}>
            <Image src={mainBg} alt={"Background"} height={820} width={1435} className={styles.main__img}/>
            <div className={styles.content}>
                <Carousels />
                <CaseSection title={'Популярные кейсы'}/>
            </div>
            <Image src={footerBg} alt={"Background"} height={820} width={1435} className={styles.bottom__img}/>
        </div>
    );
};

export default HomePage;