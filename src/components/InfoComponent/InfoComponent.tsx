import Image from "next/image";
import Online from "../../../public/Header/Online.svg";
import styles from "./InfoComponent.module.css";
import clsx from "clsx";

interface InfoComponentProps {
    firstWord: string
    stylesFirstWord?: string
    secondWord?: string
    stylesSecondWord?: string
}

const InfoComponent = ({firstWord, stylesFirstWord, secondWord, stylesSecondWord}: InfoComponentProps) => {
    return (
        <div className={styles.root}>
            <div className={'flex'}>
                <Image src={Online} alt={"Online"} width={17.5} height={20}/>
                <h6 className={clsx(styles.count, stylesFirstWord ? `${stylesFirstWord}` : 'text-white')}>{firstWord}</h6>
            </div>
            {secondWord &&
                <span className={clsx(styles.count, stylesSecondWord ? stylesSecondWord : 'text-white')}>{secondWord}</span>}
        </div>
    );
};

export default InfoComponent;