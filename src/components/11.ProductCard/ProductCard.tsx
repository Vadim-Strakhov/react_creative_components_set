import styles from "./ProductCard.module.scss";
import headphones from "../../assets/11.ProductCard/headphones.png";

const ProductCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card} data-brand="CORSAIR">
        <img src={headphones} alt="headphones" className={styles.img} />
        <div className={styles.content}>
          <div className={styles.title}>Беспроводные наушники</div>
          <div className={styles.price}>
            5 <small>000 ₽</small>
          </div>
          <div className={styles.btn}>Купить</div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
