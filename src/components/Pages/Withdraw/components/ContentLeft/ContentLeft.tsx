import styles from './ContentLeft.module.css'
import RadioButton from "@/components/ui/RadioButton/RadioButton";
import WithdrawMethods from "@/components/Pages/Withdraw/components/WithdrawMethods/WithdrawMethods";
const ContentLeft = () => {
    return (
        <div className={styles.content__left}>
            <h2 className={styles.content__left__header}>Все доступные пакеты гемов для вывода</h2>
            <WithdrawMethods />
            <div className={styles.content__bottom}>
                <RadioButton
                    outlineStyle={{
                        background: 'rgb(33, 27, 62)',
                        borderRadius: '10px',
                    }}
                    inlineStyle={{
                        background: 'rgb(27, 191, 103)',
                        maxWidth: "18px",
                        maxHeight: "18px",
                        borderRadius: '4px'
                    }}
                />
                <span className={styles.acception}>Я принимаю условия пользовательского соглашения</span>
            </div>
        </div>
    );
};

export default ContentLeft;