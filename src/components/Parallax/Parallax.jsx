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
          src="https://i.pinimg.com/736x/06/25/d9/0625d98fb5bad2c913328d80c5ee6732--bridge-wallpaper-wallpaper-in-hd.jpg"
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
