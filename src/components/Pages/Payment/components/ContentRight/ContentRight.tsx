import PayButton from "@/components/Pages/Payment/components/PayButton/PayButton";
import PaymentInfo from "@/components/Pages/Payment/components/PaymentInfo/PaymentInfo";
import PaymentForm from "@/components/Pages/Payment/components/PaymentForm/PaymentForm";
import SelectedMethod from "@/components/Pages/Payment/components/SelectedMethod/SelectedMethod";
import ContentRightWrapper from "@/components/Pages/components/Payment/ContentRightWrapper/ContentRightWrapper";
import styles from "./ContentRight.module.css";
import RadioButton from "@/components/ui/RadioButton/RadioButton";

const ContentRight = () => {
    return (
        <ContentRightWrapper>
            <SelectedMethod />
            <PaymentForm />
            <PaymentInfo />
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
            <PayButton/>
        </ContentRightWrapper>
    );
};

export default ContentRight;