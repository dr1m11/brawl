'use client'
import styles from './AccountBtn.module.css'
import clsx from "clsx";

interface AccountBtnProps {
    type: 'login' | 'register'
    setType: () => void
}
const AccountBtn = ({type, setType}: AccountBtnProps) => {
    return (
        <button className={clsx(styles.account__btn)} onClick={setType}>
            {type == 'login' ? 'Создать аккаунт' : 'Уже есть аккаунт?'}
        </button>
    );
};

export default AccountBtn;