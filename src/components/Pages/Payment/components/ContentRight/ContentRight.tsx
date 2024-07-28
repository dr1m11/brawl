import PayButton from "@/components/Pages/Payment/components/PayButton/PayButton";
import PaymentInfo from "@/components/Pages/Payment/components/PaymentInfo/PaymentInfo";
import PaymentForm from "@/components/Pages/Payment/components/PaymentForm/PaymentForm";
import SelectedMethod from "@/components/Pages/Payment/components/SelectedMethod/SelectedMethod";
import ContentRightWrapper from "@/components/Pages/components/Payment/ContentRightWrapper/ContentRightWrapper";

const ContentRight = () => {
    return (
        <ContentRightWrapper>
            <SelectedMethod />
            <PaymentForm />
            <PaymentInfo />
            <PayButton />
        </ContentRightWrapper>
    );
};

export default ContentRight;