import styles from "./CreditCards.module.scss";
import infinity from "../../assets/16.CreditCards/infinity.webp";
import bloom from "../../assets/16.CreditCards/bloom.webp";
import melancholy from "../../assets/16.CreditCards/melancholy.webp";
import mist from "../../assets/16.CreditCards/mist.webp";
import serenity from "../../assets/16.CreditCards/serenity.webp";

const CreditCards = () => {
  const cards = [
    { img: infinity, i: 0 },
    { img: bloom, i: 1 },
    { img: melancholy, i: 2 },
    { img: mist, i: 3 },
    { img: serenity, i: 4 },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        {cards.map((card) => (
          <div
            key={card.i}
            className={styles.card}
            style={
              {
                "--i": card.i,
                "--img": `url(${card.img})`,
              } as React.CSSProperties
            }
          >
            <div className={styles.card__title}>VISA</div>
            <div className={styles.card__type}>debit</div>
            <div className={styles.card__numb}>
              <span>****</span>
              <span>****</span>
              <span>****</span>
              <strong>4035</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditCards;
