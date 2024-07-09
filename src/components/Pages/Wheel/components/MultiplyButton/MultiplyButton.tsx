import styles from "./MultiplyButton.module.css";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setUserCell} from "@/lib/wheelSlice/wheelSlice";

interface MultiplyButtonProps {
    multiplier: number
    borderColor: string
}

const MultiplyButton = ({multiplier, borderColor}: MultiplyButtonProps) => {
    const { userCell} = useAppSelector(state => state.wheel)
    const dispatch = useAppDispatch()
    return (
        <div className={styles.multiplier} style={{borderColor: borderColor, backgroundColor: userCell === multiplier && 'rgb(43, 119, 251)'}} onClick={() => dispatch(setUserCell(multiplier))}>
            <span className={styles.multiplier__label}>X{multiplier}</span>
        </div>
    );
};

export default MultiplyButton;