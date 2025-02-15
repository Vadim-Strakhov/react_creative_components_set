import { useState } from "react";
import styles from "./LavaMenu.module.scss";

const LavaMenu = () => {
  const [selected, setSelected] = useState("m-home");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.id);
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.menu}>
        <input
          type="radio"
          name="icons"
          id="m-home"
          className={`${styles.home} ${styles.lavaInput}`}
          checked={selected === "m-home"}
          onChange={handleChange}
        />
        <label
          htmlFor="m-home"
          className={`${styles.lavaLabel} ${selected === "m-home" ? styles.checked : ""}`}
        >
          <i className="fa-solid fa-home"></i>
          <span>Главная</span>
        </label>
        <input
          type="radio"
          name="icons"
          id="m-search"
          className={`${styles.search} ${styles.lavaInput}`}
          checked={selected === "m-search"}
          onChange={handleChange}
        />
        <label
          htmlFor="m-search"
          className={`${styles.lavaLabel} ${selected === "m-search" ? styles.checked : ""}`}
        >
          <i className="fa-solid fa-search"></i>
          <span>Поиск</span>
        </label>
        <input
          type="radio"
          name="icons"
          id="m-notification"
          className={`${styles.notification} ${styles.lavaInput}`}
          checked={selected === "m-notification"}
          onChange={handleChange}
        />
        <label
          htmlFor="m-notification"
          className={`${styles.lavaLabel} ${selected === "m-notification" ? styles.checked : ""}`}
        >
          <i className="fa-solid fa-bell"></i>
          <span>Уведомления</span>
        </label>
        <input
          type="radio"
          name="icons"
          id="m-favorites"
          className={`${styles.favorites} ${styles.lavaInput}`}
          checked={selected === "m-favorites"}
          onChange={handleChange}
        />
        <label
          htmlFor="m-favorites"
          className={`${styles.lavaLabel} ${selected === "m-favorites" ? styles.checked : ""}`}
        >
          <i className="fa-solid fa-heart"></i>
          <span>Избранное</span>
        </label>
        <input
          type="radio"
          name="icons"
          id="m-profile"
          className={`${styles.profile} ${styles.lavaInput}`}
          checked={selected === "m-profile"}
          onChange={handleChange}
        />
        <label
          htmlFor="m-profile"
          className={`${styles.lavaLabel} ${selected === "m-profile" ? styles.checked : ""}`}
        >
          <i className="fa-solid fa-user"></i>
          <span>Аккаунт</span>
        </label>
        <div className={styles.selector}></div>
      </nav>
    </div>
  );
};

export default LavaMenu;
