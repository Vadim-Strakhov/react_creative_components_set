import { useState } from "react";
import styles from "./RoadMap.module.scss";

const RoadMap = () => {
  const [selectedYear, setSelectedYear] = useState(2005);

  const handleRadioChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>История развития YouTube, 2005-2022</h1>
      <div className={styles.roadmap}>
        <input
          type="radio"
          name="road"
          checked={selectedYear === 2005}
          onChange={() => handleRadioChange(2005)}
        />
        <div className={styles.item}>
          <div className={styles.title}>Запуск</div>
          <div className={styles.year}>2005</div>
        </div>
        <input
          type="radio"
          name="road"
          checked={selectedYear === 2006}
          onChange={() => handleRadioChange(2006)}
        />
        <div className={styles.item}>
          <div className={styles.title}>Выкупает Google</div>
          <div className={styles.year}>2006</div>
        </div>
        <input
          type="radio"
          name="road"
          checked={selectedYear === 2010}
          onChange={() => handleRadioChange(2010)}
        />
        <div className={styles.item}>
          <div className={styles.title}>Поддержка IMAX</div>
          <div className={styles.year}>2010</div>
        </div>
        <input
          type="radio"
          name="road"
          checked={selectedYear === 2011}
          onChange={() => handleRadioChange(2011)}
        />
        <div className={styles.item}>
          <div className={styles.title}>Изменение интерфейса</div>
          <div className={styles.year}>2011</div>
        </div>
        <input
          type="radio"
          name="road"
          checked={selectedYear === 2015}
          onChange={() => handleRadioChange(2015)}
        />
        <div className={styles.item}>
          <div className={styles.title}>C Flash на HTML5</div>
          <div className={styles.year}>2015</div>
        </div>
        <input
          type="radio"
          name="road"
          checked={selectedYear === 2016}
          onChange={() => handleRadioChange(2016)}
        />
        <div className={styles.item}>
          <div className={styles.title}>Конечные заставки</div>
          <div className={styles.year}>2016</div>
        </div>
        <input
          type="radio"
          name="road"
          checked={selectedYear === 2017}
          onChange={() => handleRadioChange(2017)}
        />
        <div className={styles.item}>
          <div className={styles.title}>Запуск YouTube TV</div>
          <div className={styles.year}>2017</div>
        </div>
        <input
          type="radio"
          name="road"
          checked={selectedYear === 2018}
          onChange={() => handleRadioChange(2018)}
        />
        <div className={styles.item}>
          <div className={styles.title}>Платные подписки</div>
          <div className={styles.year}>2018</div>
        </div>
        <input
          type="radio"
          name="road"
          checked={selectedYear === 2021}
          onChange={() => handleRadioChange(2021)}
        />
        <div className={styles.item}>
          <div className={styles.title}>Скрытие дизлайков</div>
          <div className={styles.year}>2021</div>
        </div>
        <input
          type="radio"
          name="road"
          checked={selectedYear === 2022}
          onChange={() => handleRadioChange(2022)}
        />
        <div className={styles.item}>
          <div className={styles.title}>4K только в Premium</div>
          <div className={styles.year}>2022</div>
        </div>
        <div className={styles.info}>
          <div className={styles.descr}>Создание и запуск YouTube</div>
          <div className={styles.descr}>
            Приобретение компанией Google за 1 650 000 000$
          </div>
          <div className={styles.descr}>
            Google объявила о поддержке IMAX на YouTube
          </div>
          <div className={styles.descr}>
            Первое изменение в дизайне с октября 2006 года
          </div>
          <div className={styles.descr}>
            YouTube перешел на HTML5-плеер, заменив стандартный Flash
          </div>
          <div className={styles.descr}>
            Появилась возможность добавлять конечные заставки для видео
          </div>
          <div className={styles.descr}>
            Запуск собственной телевизионной платформы YouTube TV
          </div>
          <div className={styles.descr}>
            У каналов от 30тыс. подписчиков, появились платные подписки
          </div>
          <div className={styles.descr}>
            YouTube стал скрывать счетчик дизлайков под видеороликами
          </div>
          <div className={styles.descr}>
            4K будет доступно только подписчикам YouTube Premium
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
