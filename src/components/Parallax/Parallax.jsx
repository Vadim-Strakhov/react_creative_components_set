import styles from "./Parallax.module.scss";

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
        <img
          className={styles.img}
          src="https://gas-kvas.com/uploads/posts/2023-02/1675438168_gas-kvas-com-p-fonovie-risunki-mosti-14.jpg"
          alt=""
        />
        <img
          className={styles.img}
          src="https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666380388_15-mykaleidoscope-ru-p-krasivie-mosti-mira-oboi-15.jpg"
          alt=""
        />
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
