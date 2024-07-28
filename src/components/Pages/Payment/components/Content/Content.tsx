import styles from './Content.module.css'
import ContentLeft from "@/components/Pages/Payment/components/ContentLeft/ContentLeft";
import ContentRight from "@/components/Pages/Payment/components/ContentRight/ContentRight";
const Content = () => {
    return (
        <div className={styles.content}>
            <ContentLeft />
            <ContentRight />
        </div>
    );
};

export default Content;