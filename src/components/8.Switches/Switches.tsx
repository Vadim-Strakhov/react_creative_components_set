import styles from "./Switches.module.scss";

const Switches = () => {
  return (
    <div className={styles.wrapper}>
      <div id="container" className={styles.container}>
        {[...Array(15)].map((_, i) => (
          <div key={i} className={styles.toggleButtonContainer}>
            <div className={styles.toggleButton}>
              <div
                className={`${styles.btn} ${i < 9 ? styles.btnPill : styles.btnRect} ${styles[`button${i + 1}`]}`}
                id={`button-${i + 1}`}
              >
                <input type="checkbox" className={styles.checkbox} />
                <div className={styles.knob}>
                  {i === 4 && <span></span>}
                  {(i === 6 || i === 7 || i === 8 || i >= 9) && <span></span>}
                </div>
                <div className={styles.btnBg}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Switches;
