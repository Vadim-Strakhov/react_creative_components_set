import styles from "./InteractiveForm.module.scss";

export const InteractiveForm = () => {
  return (
    <div className={styles.wrapper}>
      <form>
        <input
          id="input-1"
          className={styles.input}
          type="text"
          placeholder="Вадим Страхов"
          required
          autoFocus
        />
        <label htmlFor="input-1" className={styles.label}>
          <span className={styles.labelText}>Полное имя</span>
          <span className={styles.navDot}></span>
          <div className={styles.signupButtonTrigger}>Зарегистрироваться</div>
        </label>

        <input
          id="input-2"
          className={styles.input}
          type="text"
          placeholder="example"
          required
        />
        <label htmlFor="input-2" className={styles.label}>
          <span className={styles.labelText}>Ник</span>
          <span className={styles.navDot}></span>
        </label>

        <input
          id="input-3"
          className={styles.input}
          type="email"
          placeholder="test@mail.ru"
          required
        />
        <label htmlFor="input-3" className={styles.label}>
          <span className={styles.labelText}>Email</span>
          <span className={styles.navDot}></span>
        </label>

        <input
          id="input-4"
          className={styles.input}
          type="text"
          placeholder="••••••"
          required
        />
        <label htmlFor="input-4" className={styles.label}>
          <span className={styles.labelText}>Пароль</span>
          <span className={styles.navDot}></span>
        </label>

        <input
          id="input-5"
          className={styles.input}
          type="text"
          placeholder="••••••"
          required
        />
        <label htmlFor="input-5" className={styles.label}>
          <span className={styles.labelText}>Подтвердите пароль</span>
          <span className={styles.navDot}></span>
        </label>

        <button type="submit" className={styles.button}>
          Отправить
        </button>
        <p className={styles.tip}>Нажмите Tab</p>
        <div className={styles.signupButton}>Зарегистрироваться</div>
      </form>
    </div>
  );
};

export default InteractiveForm;
