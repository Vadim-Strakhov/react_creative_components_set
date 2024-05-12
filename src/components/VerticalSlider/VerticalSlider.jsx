import { useState } from "react";
import styles from "./VerticalSlider.module.scss";

const VerticalSlider = () => {
  const [value, setValue] = useState(1);

  function changeHandler(event) {
    setValue(event.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <input
        type="radio"
        name="slider"
        title="Переключатель"
        value="1"
        checked={value == "1" ? true : false}
        onChange={changeHandler}
        className={styles.input}
      ></input>
      <input
        type="radio"
        name="slider"
        title="Переключатель"
        value="2"
        checked={value == "2" ? true : false}
        onChange={changeHandler}
        className={styles.input}
      ></input>
      <input
        type="radio"
        name="slider"
        title="Переключатель"
        value="3"
        checked={value == "3" ? true : false}
        onChange={changeHandler}
        className={styles.input}
      ></input>
      <input
        type="radio"
        name="slider"
        title="Переключатель"
        value="4"
        checked={value == "4" ? true : false}
        onChange={changeHandler}
        className={styles.input}
      ></input>
      <input
        type="radio"
        name="slider"
        title="Переключатель"
        value="5"
        checked={value == "5" ? true : false}
        onChange={changeHandler}
        className={styles.input}
      ></input>
      <div className={styles.blocks}>
        <div className={styles.blocks__content}>
          <div
            className={styles.block}
            style={{
              "--img":
                "url('https://i.ibb.co/fk4Bs44/photo-1554099617-31b803e2b002-ixlib-rb-4-0.jpg')",
            }}
          >
            Слайдер на чистом CSS
          </div>
          <div
            className={styles.block}
            style={{
              "--img":
                "url('https://i.ibb.co/ZNxnnVw/photo-1664768297497-e60629c80ef4-ixlib-rb-4-0.jpg')",
            }}
          >
            Блок 2
          </div>
          <div
            className={styles.block}
            style={{
              "--img":
                "url('https://i.ibb.co/wBRG8Rs/photo-1662522212392-309a624a2feb-ixlib-rb-4-0.jpg')",
            }}
          >
            Блок 3
          </div>
          <div
            className={styles.block}
            style={{
              "--img":
                "url('https://i.ibb.co/WyzgWyb/photo-1664021029310-bc881e4ebb22-ixlib-rb-4-0.jpg')",
            }}
          >
            Блок 4
          </div>
          <div
            className={styles.block}
            style={{
              "--img":
                "url('https://i.ibb.co/DgS6L1R/photo-1623586785022-97727556f0fe-ixlib-rb-4-0.jpg')",
            }}
          >
            Блок 5
          </div>
        </div>
      </div>
    </div>
  );
};
export default VerticalSlider;
