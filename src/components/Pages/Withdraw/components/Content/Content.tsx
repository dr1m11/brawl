import styles from './Content.module.css'
import ContentLeft from "@/components/Pages/Withdraw/components/ContentLeft/ContentLeft";
import ContentRight from "@/components/Pages/Withdraw/components/ContentRight/ContentRight";
const Content = () => {
    return (
        <div className={styles.content}>
            <ContentLeft />
            <ContentRight />
        </div>
    );
};

export default Content;