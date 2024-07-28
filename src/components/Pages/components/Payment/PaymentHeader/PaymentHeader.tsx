import styles from './PaymentHeader.module.css'
import Link from "next/link";
import clsx from "clsx";

interface PaymentHeaderProps {
    label: string
}

const PaymentHeader = ({label}: PaymentHeaderProps) => {
    return (
        <div className={styles.header}>
            <Link href={'/profile'}>
                <button className={clsx(styles.back__btn)}>Назад</button>
            </Link>
            <span className={styles.header__label}>{label}</span>
        </div>
    );
};

export default PaymentHeader;