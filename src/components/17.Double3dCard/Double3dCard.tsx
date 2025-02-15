import styles from "./Double3dCard.module.scss";
import ivy from "../../assets/17.Double3dCard/ivy.webp";
import ivyRock from "../../assets/17.Double3dCard/ivyRock.webp";
import camp from "../../assets/17.Double3dCard/camp.webp";
import grass from "../../assets/17.Double3dCard/grass.webp";
import kayak from "../../assets/17.Double3dCard/kayak.webp";
import sea from "../../assets/17.Double3dCard/sea.webp";
import stone from "../../assets/17.Double3dCard/stone.webp";
import water from "../../assets/17.Double3dCard/water.webp";

const Double3dCard = () => {
  return (
    <div className={styles.container}>
      <input id="switch" type="checkbox" className={styles.switch} />
      <label htmlFor="switch" className={styles.switchLabel}>
        <span>Кайяки</span>
        <span>Кэмпинг</span>
      </label>
      <div className={styles.cardWrap}>
        <div className={styles.card}>
          <div
            className={styles.cardFront}
            style={{ "--img": `url(${sea})` } as React.CSSProperties}
          >
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Каяки</div>
              <div className={styles.cardPrice}>
                <small>₽</small>
                <span>1000 / 8</span>
                <small>часов</small>
                <div>с человека</div>
              </div>
              <div className={styles.cardLocation}>Россия, Карелия</div>
              <div className={styles.cardBtn}>Выбрать дату</div>
              <img className={styles.cardKayak} src={kayak} alt="kayak" />
              <img className={styles.cardWater} src={water} alt="water" />
              <img className={styles.cardStone} src={stone} alt="stone" />
            </div>
          </div>
          <div
            className={styles.cardBack}
            style={{ "--img": `url(${grass})` } as React.CSSProperties}
          >
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Кемпинг</div>
              <div className={styles.cardPrice}>
                <small>₽</small>
                <span>1000 / 8</span>
                <small>часов</small>
                <div>с человека</div>
              </div>
              <div className={styles.cardLocation}>Россия, Карелия</div>
              <div className={styles.cardBtn}>Выбрать дату</div>
              <img className={styles.cardCamp} src={camp} alt="camp" />
              <img className={styles.cardTree} src={ivy} alt="ivy" />
              <img className={styles.cardStone2} src={ivyRock} alt="ivy rock" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Double3dCard;
