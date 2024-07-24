import styles from "./FaceCards.module.scss";

const FaceCards = () => {
  return (
    <div className={styles.face_cards}>
      <div className={`${styles.card} ${styles.card1}`}>
        <div className={styles.card_title}>Брюс Уиллис</div>
        <div className={styles.card_social}>
          <i className="fa-brands fa-vk"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-telegram"></i>
          <i className="fa-brands fa-square-facebook"></i>
        </div>
      </div>
      <div className={`${styles.card} ${styles.card2}`}>
        <div className={styles.card_title}>Мэттью Макконахи</div>
        <div className={styles.card_social}>
          <i className="fa-brands fa-vk"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-telegram"></i>
          <i className="fa-brands fa-square-facebook"></i>
        </div>
      </div>
      <div className={`${styles.card} ${styles.card3}`}>
        <div className={styles.card_title}>Джордж Клуни</div>
        <div className={styles.card_social}>
          <i className="fa-brands fa-vk"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-telegram"></i>
          <i className="fa-brands fa-square-facebook"></i>
        </div>
      </div>
    </div>
  );
};
export default FaceCards;
