import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <input type="checkbox" className={styles.input} id="menu" />
      <label htmlFor="menu" className={styles.btn}>
        <span></span>
      </label>
      <div className={styles.ripple}></div>
      <nav className={styles.menu}>
        <a href="" className={styles.link}>
          Главная
        </a>
        <a href="" className={styles.link}>
          Товары
        </a>
        <a href="" className={styles.link}>
          Блог
        </a>
        <a href="" className={styles.link}>
          О компании
        </a>
        <a href="" className={styles.link}>
          Контакты
        </a>
      </nav>
    </div>
  );
};
export default Menu;
