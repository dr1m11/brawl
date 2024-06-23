import styles from './Case.module.css'
import {Manrope} from "next/font/google";
import clsx from "clsx";
import Link from "next/link";
import Roulette from "@/components/Roulette/Roulette";
import InCaseGun from "@/components/InCaseGun/InCaseGun";
import ItemsList from "@/components/ItemsList/ItemsList";

const manrope = Manrope({weight: ['400', '500', '600'], subsets: ['latin']})

const CasePage = () => {
    return (
        <div className={styles.root}>
            <div className={styles.background}/>
            <div className={styles.wrapper}>
                <Link href={'/'}>
                    <button className={clsx(styles.back__btn, manrope.className)}>Назад</button>
                </Link>
                <Roulette />
                <div className={styles.in__case}>
                    <h2 className={styles.title}>Содержимое кейса</h2>
                    <ItemsList />
                </div>
            </div>
        </div>
    );
};

export default CasePage;