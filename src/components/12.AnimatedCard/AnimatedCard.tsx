import styles from "./AnimatedCard.module.scss";

const AnimatedCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.glow}></div>
        <div className={styles.content}>
          <div className={styles.title}>
            Карточка с анимированной подсветкой
          </div>
        </div>
      </div>
    </div>
  );
};
export default AnimatedCard;
