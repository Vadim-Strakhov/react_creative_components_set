import styles from "./Parallax.module.scss";
import bridge1 from "../../assets/2.Parallax/bridge_1.jpg";
import bridge2 from "../../assets/2.Parallax/bridge_2.jpg";

const Parallax = () => {
  return (
    <div className={styles.cards__wrapper}>
      <section className={`${styles.block} ${styles.block1}`}>
        <h1 className={styles.title}>Parallax Эффект</h1>
      </section>
      <section className={`${styles.block} ${styles.block2}`}>
        <div className={styles.page}>
          <div className={styles.page__title}>Card 1</div>
          <div className={styles.page__desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium necessitatibus iste porro blanditiis, corrupti voluptas
            inventore nobis doloribus ullam! Quo voluptatibus fuga adipisci
            doloremque expedita aliquid amet molestiae libero pariatur!
          </div>
        </div>
      </section>
      <section className={`${styles.block} ${styles.block3}`}>
        <img className={styles.img} src={bridge1} alt="bridge_1" />
        <img className={styles.img} src={bridge2} alt="bridge_2" />
        <div className={styles.page}>
          <div className={styles.page__title}>Card 2</div>
          <div className={styles.page__desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium necessitatibus iste porro blanditiis, corrupti voluptas
            inventore nobis doloribus ullam! Quo voluptatibus fuga adipisci
            doloremque expedita aliquid amet molestiae libero pariatur!
          </div>
        </div>
      </section>
      <section className={`${styles.block} ${styles.block4}`}>
        <div className={styles.page}>
          <div className={styles.page__title}>Card 3</div>
          <div className={styles.page__desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium necessitatibus iste porro blanditiis, corrupti voluptas
            inventore nobis doloribus ullam! Quo voluptatibus fuga adipisci
            doloremque expedita aliquid amet molestiae libero pariatur!
          </div>
        </div>
      </section>
      <section className={`${styles.block} ${styles.block5}`}>
        <div className={styles.page}>
          <div className={styles.page__title}>Card 4</div>
          <div className={styles.page__desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium necessitatibus iste porro blanditiis, corrupti voluptas
            inventore nobis doloribus ullam! Quo voluptatibus fuga adipisci
            doloremque expedita aliquid amet molestiae libero pariatur!
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parallax;
