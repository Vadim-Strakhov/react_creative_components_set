import { useState } from "react";
import styles from "./HorizontalSlider.module.scss";

const HorizontalSlider = () => {
  const [value, setValue] = useState(1);

  function changeHandler(event) {
    setValue(event.target.value);
  }

  return (
    <div className={styles.slider}>
      <input
        type="radio"
        id="slide-1"
        name="slide"
        value="1"
        checked={value == "1" ? true : false}
        onChange={changeHandler}
        className={styles.input}
      />
      <label
        style={{
          "--img":
            "url('https://img.goodfon.ru/original/2880x1800/c/79/pribytie-arrival-fantastika-poster-kollazh-dzheremi-renner-j.jpg')",
        }}
        className={styles.slide}
        htmlFor="slide-1"
      >
        <div className={styles.name}>Фильм 1</div>
        <div className={styles.content}>
          <div className={styles.title}>Заголовок фильма 1</div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            officia nemo accusantium delectus alias amet, ea minima id,
            quibusdam dolores vel placeat maiores inventore omnis natus nesciunt
            sunt explicabo architecto.
          </div>
        </div>
      </label>
      <input
        type="radio"
        id="slide-2"
        name="slide"
        value="2"
        checked={value == "2" ? true : false}
        onChange={changeHandler}
        className={styles.input}
      />
      <label
        style={{
          "--img":
            "url('https://img.goodfon.ru/original/2560x1440/1/d0/scarlett-johansson-action-fantasy-superheroes-hulk-space-d-2.jpg')",
        }}
        className={styles.slide}
        htmlFor="slide-2"
      >
        <div className={styles.name}>Фильм 2</div>
        <div className={styles.content}>
          <div className={styles.title}>Заголовок фильма 2</div>
          <div className={styles.desc}>
            Maiores obcaecati et, excepturi corrupti aliquam ipsa ratione alias
            aliquid vero maxime laborum, voluptatibus culpa. Iste illo
            temporibus ab praesentium sequi laboriosam quos repellendus, est
            eaque, quidem earum molestias molestiae?
          </div>
        </div>
      </label>
      <input
        type="radio"
        id="slide-3"
        name="slide"
        value="3"
        checked={value == "3" ? true : false}
        onChange={changeHandler}
        className={styles.input}
      />
      <label
        style={{
          "--img":
            "url('https://i.artfile.ru/3840x2160_1566401_[www.ArtFile.ru].jpg')",
        }}
        className={styles.slide}
        htmlFor="slide-3"
      >
        <div className={styles.name}>Фильм 3</div>
        <div className={styles.content}>
          <div className={styles.title}>Заголовок фильма 3</div>
          <div className={styles.desc}>
            Praesentium magnam accusamus autem asperiores quas delectus, tempora
            sed impedit cupiditate facilis incidunt omnis nemo non
            necessitatibus. Laudantium exercitationem vel culpa tempora
            distinctio magni quisquam dolores beatae. Minima, animi qui.
          </div>
        </div>
      </label>
      <input
        type="radio"
        id="slide-4"
        name="slide"
        value="4"
        checked={value == "4" ? true : false}
        onChange={changeHandler}
        className={styles.input}
      />
      <label
        style={{
          "--img":
            "url('https://gamemag.ru/images/imagemanager/cache/14/12aa/1412aa_uhdpaper.com-download-pc-2k-wallpaper-59-0-f.jpg')",
        }}
        className={styles.slide}
        htmlFor="slide-4"
      >
        <div className={styles.name}>Фильм 4</div>
        <div className={styles.content}>
          <div className={styles.title}>Заголовок фильма 4</div>
          <div className={styles.desc}>
            Commodi alias voluptas fugiat quas quisquam perferendis laboriosam.
            Excepturi explicabo, non, velit exercitationem voluptatem doloremque
            cupiditate aut consequatur, vel praesentium aliquam tempora ducimus
            minus harum quaerat asperiores in at a.
          </div>
        </div>
      </label>
      <input
        type="radio"
        id="slide-5"
        name="slide"
        value="5"
        checked={value == "5" ? true : false}
        onChange={changeHandler}
        className={styles.input}
      />
      <label
        style={{
          "--img":
            "url('https://img.goodfon.ru/original/4000x2250/2/c3/petlia-vremeni-oruzhie-spina-k-spine-okhotnik.jpg')",
        }}
        className={styles.slide}
        htmlFor="slide-5"
      >
        <div className={styles.name}>Фильм 5</div>
        <div className={styles.content}>
          <div className={styles.title}>Заголовок фильма 5</div>
          <div className={styles.desc}>
            Aliquam eveniet dolores doloribus beatae voluptas nulla neque quia
            repudiandae obcaecati sunt natus ex quae in repellat vitae veniam
            quod, debitis itaque, ducimus aliquid soluta. Fugiat perferendis
            repudiandae dolorem voluptas.
          </div>
        </div>
      </label>
    </div>
  );
};

export default HorizontalSlider;
