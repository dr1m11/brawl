import styles from "./Case.module.css";
import Link from "next/link";
import clsx from "clsx";
import {Manrope} from "next/font/google";
import Roulette from "@/components/Pages/Case/components/Roulette/Roulette";
import ItemsList from "@/components/Pages/Case/components/ItemsList/ItemsList";

const manrope = Manrope({weight: ['400', '500', '600'], subsets: ['latin']})

const Case = () => {
    return (
        <div>
            <div className={styles.root}>
                <div className={styles.background}/>
                <div className={styles.wrapper}>
                    <Link href={'/'}>
                        <button className={clsx(styles.back__btn, manrope.className)}>Назад</button>
                    </Link>
                    <Roulette/>
                    <div className={styles.in__case}>
                        <h2 className={styles.title}>Содержимое кейса</h2>
                        <ItemsList/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Case;