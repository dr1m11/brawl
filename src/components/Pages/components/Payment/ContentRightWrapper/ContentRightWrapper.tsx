import styles from './ContentRightWrapper.module.css'
import {ReactNode} from "react";

const ContentRightWrapper = ({children}: {children: ReactNode}) => {
    return (
        <div className={styles.content__right}>
            {children}
        </div>
    );
};

export default ContentRightWrapper;