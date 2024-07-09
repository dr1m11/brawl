import styles from "./Multipliers.module.css";
import MultiplyButton from "@/components/Pages/Wheel/components/MultiplyButton/MultiplyButton";

const Multipliers = () => {
    return (
        <div className={styles.menu__right}>
            <MultiplyButton multiplier={2} borderColor={'#D0D3D7'} key={2}/>
            <MultiplyButton multiplier={3} borderColor={'#D85154'} key={3}/>
            <MultiplyButton multiplier={5} borderColor={'#8F49EB'} key={4}/>
            <MultiplyButton multiplier={10} borderColor={'#45BB45'} key={5}/>
            <MultiplyButton multiplier={100} borderColor={'#EDB932'} key={6}/>
        </div>
    );
};

export default Multipliers;