import styles from './InfoColumn.module.css'
import clsx from "clsx";
import Image from "next/image";
import ProfileIconGrey from "../../../../../../public/Wheel/ProfileIconGrey.svg";
import Player from "@/components/CrashPlayer/Player";
import localFont from "next/font/local";
import ColumnHeading from "@/components/Pages/Wheel/components/ColumnHeading/ColumnHeading";
import PlayersList from "@/components/Pages/Wheel/components/PlayersList/PlayersList";


const InfoColumn = () => {
    return (
        <div className={styles.column}>
            <ColumnHeading />
            <PlayersList />
        </div>
    );
};

export default InfoColumn;