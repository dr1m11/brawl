'use client'
import styles from "./Carousels.module.css";
import {BannerCarousel} from "@/components/Pages/HomePage/components/Carousels/BannerCarousel/DesktopCarousel/BannerCarousel";
import Carousel from "@/components/Pages/HomePage/components/Carousels/Carousel/Carousel";
import useResize from "@/hooks/useResize";
import {
    MobileCarousel
} from "@/components/Pages/HomePage/components/Carousels/BannerCarousel/MobileCarousel/MobileCarousel";

const Carousels = () => {
    const size = useResize()
    return (
        <div className={styles.carousels}>
            <div className={styles.banner__carousel}>
                {
                    size >= 600 ?
                        <BannerCarousel/>
                        :
                        <MobileCarousel />
                }
            </div>
            <Carousel/>
        </div>
    );
};

export default Carousels;