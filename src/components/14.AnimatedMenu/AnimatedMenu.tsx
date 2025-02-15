import styles from "./AnimatedMenu.module.scss";

const AnimatedMenu = () => {
  return (
    <div className={styles.wrapper}>
      <input type="checkbox" id="menuAnimated" className={styles.input} />
      <div className={styles.bg}>
        <div className={styles.left}></div>
        <div className={styles.center}></div>
        <div className={styles.right}></div>
      </div>
      <label htmlFor="menuAnimated" className={styles.btn}>
        <div className={styles.menu}>
          <div></div>
        </div>
        <div className={styles.close}></div>
      </label>
      <div className={styles.title} data-title="Меню"></div>
      <nav className={styles.main_menu}>
        <a href="">Главная</a>
        <a href="">О нас</a>
        <a href="">Блог</a>
        <a href="">Контакты</a>
      </nav>
    </div>
  );
};
export default AnimatedMenu;
