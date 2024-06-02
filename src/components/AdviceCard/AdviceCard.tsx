import useAdvice from '../../hooks/useAdvice'
import { IoReloadCircle } from "react-icons/io5"
import dividerDesktop from '../../assets/pattern-divider-desktop.svg';
import dividerMobile from '../../assets/pattern-divider-mobile.svg';
import styles from './AdviceCard.module.css'; 

const AdviceCard = () => {
    const { advice, getAdvice } = useAdvice();

    return (
        <div className={styles.card}>
            {advice && (
                <>
                    <p>ADVICE #{advice.id}</p>
                    <h2>“{advice.advice}”</h2>
                </>
            )}
            <img src={dividerDesktop} className={styles.dividerDesktop} alt="divider" />
            <img src={dividerMobile} className={styles.dividerMobile} alt="divider" />
            <div className={styles.dice} onClick={getAdvice}>
                <IoReloadCircle className={styles.reload} />
            </div>
        </div>
    );
};

export default AdviceCard;
