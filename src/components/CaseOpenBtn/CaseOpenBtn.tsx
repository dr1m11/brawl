'use client'
import styles from './CaseOpenBtn.module.css'

interface CaseOpenBtnProps {
    setIsOpened: (flag: boolean) => void
}

const CaseOpenBtn = ({setIsOpened}: CaseOpenBtnProps) => {
    return (
        <button onClick={() => setIsOpened(true)} className={styles.root}>
            Открыть
        </button>
    );
};

export default CaseOpenBtn;