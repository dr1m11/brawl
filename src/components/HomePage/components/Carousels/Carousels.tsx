import styles from "./Carousels.module.css";
import {BannerCarousel} from "@/components/HomePage/components/Carousels/BannerCarousel/BannerCarousel";
import Carousel from "@/components/HomePage/components/Carousels/Carousel/Carousel";

const Carousels = () => {
    return (
        <div className={styles.carousels}>
            <div className={styles.banner__carousel}>
                <BannerCarousel/>
            </div>
            <Carousel/>
        </div>
    );
};

export default Carousels;