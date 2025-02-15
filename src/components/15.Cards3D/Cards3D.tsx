import styles from "./Cards3D.module.scss";
import bliss from "../../assets/15.3dCards/bliss.webp";
import essence from "../../assets/15.3dCards/essence.webp";
import harmony from "../../assets/15.3dCards/harmony.webp";
import horizon from "../../assets/15.3dCards/horizon.webp";
import radiance from "../../assets/15.3dCards/radiance.webp";
import serenity from "../../assets/15.3dCards/serenity.webp";

const Cards3D = () => {
  const cards = [
    {
      bg: horizon,
      img: bliss,
      title: "Девушка 1",
      desc: "+7 (000) 000 00-00",
    },
    {
      bg: harmony,
      img: radiance,
      title: "Девушка 2",
      desc: "+7 (000) 000 00-00",
    },
    {
      bg: essence,
      img: serenity,
      title: "Девушка 3",
      desc: "+7 (000) 000 00-00",
    },
  ];

  return (
    <div className={styles.wrapper}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <div
            className={styles.card__img}
            style={
              {
                "--bg": `url(${card.bg})`,
                "--img": `url(${card.img})`,
              } as React.CSSProperties
            }
          ></div>
          <div className={styles.card__title}>{card.title}</div>
          <div className={styles.card__desc}>{card.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards3D;
