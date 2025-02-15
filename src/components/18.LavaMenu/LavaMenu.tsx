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
          className={styles.home}
          checked={selected === "m-home"}
          onChange={handleChange}
        />
        <label htmlFor="m-home">
          <i className="fa-solid fa-home"></i>
          <span>Главная</span>
        </label>
        <input
          type="radio"
          name="icons"
          id="m-search"
          className={styles.search}
          checked={selected === "m-search"}
          onChange={handleChange}
        />
        <label htmlFor="m-search">
          <i className="fa-solid fa-search"></i>
          <span>Поиск</span>
        </label>
        <input
          type="radio"
          name="icons"
          id="m-notification"
          className={styles.notification}
          checked={selected === "m-notification"}
          onChange={handleChange}
        />
        <label htmlFor="m-notification">
          <i className="fa-solid fa-bell"></i>
          <span>Уведомления</span>
        </label>
        <input
          type="radio"
          name="icons"
          id="m-favorites"
          className={styles.favorites}
          checked={selected === "m-favorites"}
          onChange={handleChange}
        />
        <label htmlFor="m-favorites">
          <i className="fa-solid fa-heart"></i>
          <span>Избранное</span>
        </label>
        <input
          type="radio"
          name="icons"
          id="m-profile"
          className={styles.profile}
          checked={selected === "m-profile"}
          onChange={handleChange}
        />
        <label htmlFor="m-profile">
          <i className="fa-solid fa-user"></i>
          <span>Аккаунт</span>
        </label>
        <div className={styles.selector}></div>
      </nav>
    </div>
  );
};

export default LavaMenu;
