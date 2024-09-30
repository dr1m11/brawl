import styles from './ContentBottom.module.css'
import RadioButton from "@/components/ui/RadioButton/RadioButton";

export const ContentBottom = () => {
    return (
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
    )
}