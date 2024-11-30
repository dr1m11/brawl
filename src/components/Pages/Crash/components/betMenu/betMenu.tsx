'use client'
import styles from "@/components/Pages/Crash/components/Kostil/Kostil.module.css";
import BetCounter from "@/components/Pages/Crash/components/BetCounter/BetCounter";
import BetTips from "@/components/Pages/Crash/components/BetTips/BetTips";
import BetButton from "@/components/Pages/Crash/components/BetButton/BetButton";
import {memo} from "react";

const BetMenu = () => {
    return (
        <div className={styles.bet}>
            <BetCounter/>
            <BetTips/>
            <BetButton/>
        </div>
    );
};

export default memo(BetMenu, () => true);