import SelectedMethod from "@/components/Pages/Payment/components/SelectedMethod/SelectedMethod";
import WithdrawForm from "@/components/Pages/Withdraw/components/WithdrawForm/WithdrawForm";
import WithdrawInfo from "@/components/Pages/Withdraw/components/WithdrawInfo/WithdrawInfo";
import WithdrawButton from "@/components/Pages/Withdraw/components/WithdrawButton/WithdrawButton";
import ContentRightWrapper from "@/components/Pages/components/Payment/ContentRightWrapper/ContentRightWrapper";

const ContentRight = () => {
    return (
        <ContentRightWrapper>
            <SelectedMethod />
            <WithdrawForm />
            <WithdrawInfo />
            <WithdrawButton />
        </ContentRightWrapper>
    );
};

export default ContentRight;