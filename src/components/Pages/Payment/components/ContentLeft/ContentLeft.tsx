import styles from './ContentLeft.module.css'
import RadioButton from "@/components/ui/RadioButton/RadioButton";
import PaymentMethods from "@/components/Pages/Payment/components/PaymentMethods/PaymentMethods";
import Link from "next/link";
const ContentLeft = () => {
    return (
        <div className={styles.content__left}>
            <h2 className={styles.content__left__header}>Переведите сумму на указанную карту</h2>
            <PaymentMethods />
            <p className={styles.annotation}>Для пополнения баланса вы должны будете загрузить скриншот оплаты. Баланс пополняется
                в среднем за 15 минут, в редких случаях задержка может составлять 24 часа, но, если по истечении этого срока баланс не был пополнен, напишите в наш <Link
                    href={'https://web.telegram.org/a/#6504876997'} style={{color: 'white', cursor: 'pointer'}}>чат бот</Link>,
                указав подробные данные платежа.</p>
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