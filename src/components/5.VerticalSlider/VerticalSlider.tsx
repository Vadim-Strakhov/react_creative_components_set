import { CSSProperties, useState } from "react";
import styles from "./VerticalSlider.module.scss";
import cliff from "../../assets/5.VerticalSlider/cliff.jpg";
import desert from "../../assets/5.VerticalSlider/desert.jpg";
import leaves from "../../assets/5.VerticalSlider/leaves.jpg";
import mountains from "../../assets/5.VerticalSlider/mountains.jpg";
import tower from "../../assets/5.VerticalSlider/tower.jpg";

const VerticalSlider = () => {
  const [value, setValue] = useState("1");

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
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
            style={
              {
                "--img": `url(${mountains})`,
              } as CSSProperties
            }
          >
            Слайдер на чистом CSS
          </div>
          <div
            className={styles.block}
            style={
              {
                "--img": `url(${cliff})`,
              } as CSSProperties
            }
          >
            Блок 2
          </div>
          <div
            className={styles.block}
            style={
              {
                "--img": `url(${tower})`,
              } as CSSProperties
            }
          >
            Блок 3
          </div>
          <div
            className={styles.block}
            style={
              {
                "--img": `url(${desert})`,
              } as CSSProperties
            }
          >
            Блок 4
          </div>
          <div
            className={styles.block}
            style={
              {
                "--img": `url(${leaves})`,
              } as CSSProperties
            }
          >
            Блок 5
          </div>
        </div>
      </div>
    </div>
  );
};
export default VerticalSlider;
