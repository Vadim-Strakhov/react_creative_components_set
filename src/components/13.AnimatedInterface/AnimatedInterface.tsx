import styles from "./AnimatedInterface.module.scss";
import man from "../../assets/13.AnimatedInterface/man.jpg";
import man2 from "../../assets/13.AnimatedInterface/man2.jpg";
import man3 from "../../assets/13.AnimatedInterface/man3.jpg";
import woman from "../../assets/13.AnimatedInterface/woman.jpg";
import woman2 from "../../assets/13.AnimatedInterface/woman2.jpg";
import woman3 from "../../assets/13.AnimatedInterface/woman3.jpg";
import woman4 from "../../assets/13.AnimatedInterface/woman4.jpg";
import woman5 from "../../assets/13.AnimatedInterface/woman5.jpg";
import { CSSProperties } from "react";

const AnimatedInterface = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bg}>
        <div className={styles.outer}></div>
        <div className={styles.inner}></div>
      </div>
      <nav className={styles.menu}>
        <i className="fa-solid fa-bolt"></i>
        <i className="fa-solid fa-house"></i>
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-phone"></i>
        <i className="fa-solid fa-message"></i>
        <i className="fa-solid fa-video"></i>
      </nav>
      <div className={styles.content}>
        <div className={styles.card}>
          <div
            className={styles.img}
            style={
              {
                "--img": `url(${woman})`,
              } as CSSProperties
            }
          ></div>
          <div className={styles.title}>Card 1</div>
        </div>
        <div className={styles.card}>
          <div
            className={styles.img}
            style={
              {
                "--img": `url(${man})`,
              } as CSSProperties
            }
          ></div>
          <div className={styles.title}>Card 2</div>
        </div>
        <div className={styles.card}>
          <div
            className={styles.img}
            style={
              {
                "--img": `url(${man2})`,
              } as CSSProperties
            }
          ></div>
          <div className={styles.title}>Card 3</div>
        </div>
        <div className={styles.card}>
          <div
            className={styles.img}
            style={
              {
                "--img": `url(${man3})`,
              } as CSSProperties
            }
          ></div>
          <div className={styles.title}>Card 4</div>
        </div>
        <div className={styles.card}>
          <div
            className={styles.img}
            style={
              {
                "--img": `url(${woman2})`,
              } as CSSProperties
            }
          ></div>
          <div className={styles.title}>Card 5</div>
        </div>
        <div className={styles.card}>
          <div
            className={styles.img}
            style={
              {
                "--img": `url(${woman3})`,
              } as CSSProperties
            }
          ></div>
          <div className={styles.title}>Card 6</div>
        </div>
        <div className={styles.card}>
          <div
            className={styles.img}
            style={
              {
                "--img": `url(${woman4})`,
              } as CSSProperties
            }
          ></div>
          <div className={styles.title}>Card 7</div>
        </div>
        <div className={styles.card}>
          <div
            className={styles.img}
            style={
              {
                "--img": `url(${woman5})`,
              } as CSSProperties
            }
          ></div>
          <div className={styles.title}>Card 8</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedInterface;
