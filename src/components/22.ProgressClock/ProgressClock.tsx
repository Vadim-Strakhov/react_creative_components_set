import { useEffect, useState } from "react";
import styles from "./ProgressClock.module.scss";

const ProgressClock = () => {
  const [time, setTime] = useState(new Date());

  const getDayOfWeek = (day: number) => {
    switch (day) {
      case 1:
        return "Понедельник";
      case 2:
        return "Вторник";
      case 3:
        return "Среда";
      case 4:
        return "Четверг";
      case 5:
        return "Пятница";
      case 6:
        return "Суббота";
      default:
        return "Воскресенье";
    }
  };

  const getMonthInfo = (mo: number, yr: number) => {
    switch (mo) {
      case 1:
        return { name: "Февраль", days: yr % 4 === 0 ? 29 : 28 };
      case 2:
        return { name: "Март", days: 31 };
      case 3:
        return { name: "Апрель", days: 30 };
      case 4:
        return { name: "Май", days: 31 };
      case 5:
        return { name: "Июнь", days: 30 };
      case 6:
        return { name: "Июль", days: 31 };
      case 7:
        return { name: "Август", days: 31 };
      case 8:
        return { name: "Сентябрь", days: 30 };
      case 9:
        return { name: "Октябрь", days: 31 };
      case 10:
        return { name: "Ноябрь", days: 30 };
      case 11:
        return { name: "Декабрь", days: 31 };
      default:
        return { name: "Январь", days: 31 };
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dayOfWeek = time.getDay();
  const year = time.getFullYear();
  const month = time.getMonth();
  const day = time.getDate();
  const hr = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const dayOfWeekName = getDayOfWeek(dayOfWeek);
  const monthInfo = getMonthInfo(month, year);
  const m_progress = sec / 60;
  const h_progress = (min + m_progress) / 60;
  const d_progress = (hr + h_progress) / 24;
  const mo_progress = (day - 1 + d_progress) / monthInfo.days;

  return (
    <div className={styles.wrapper}>
      <div id="clock" className={styles.progressClock}>
        <button
          className={styles.progressClock__timeDate}
          data-group="d"
          type="button"
        >
          <small data-unit="w">{dayOfWeekName}</small>
          <br />
          <span data-unit="mo">{monthInfo.name}</span>
          <span data-unit="d">{day}</span>
        </button>
        <button
          className={styles.progressClock__timeDigit}
          data-unit="h"
          data-group="h"
          type="button"
        >
          {hr}
        </button>
        <span className={styles.progressClock__timeColon}>:</span>
        <button
          className={styles.progressClock__timeDigit}
          data-unit="m"
          data-group="m"
          type="button"
        >
          {min < 10 ? `0${min}` : min}
        </button>
        <span className={styles.progressClock__timeColon}>:</span>
        <button
          className={styles.progressClock__timeDigit}
          data-unit="s"
          data-group="s"
          type="button"
        >
          {sec < 10 ? `0${sec}` : sec}
        </button>
        <span className={styles.progressClock__timeAmPm} data-unit="ap">
          {hr > 4 && hr < 11
            ? "Утро"
            : hr > 11 && hr < 17
              ? "День"
              : hr > 17 && hr <= 21
                ? "Вечер"
                : "Ночь"}
        </span>
        <svg
          className={styles.progressClock__rings}
          width="256"
          height="256"
          viewBox="0 0 256 256"
        >
          <defs>
            <linearGradient id="pc-red">
              <stop offset="0%" stopColor="hsl(343,90%,55%)" />
              <stop offset="100%" stopColor="hsl(323,90%,55%)" />
            </linearGradient>
            <linearGradient id="pc-yellow" x1="1" y1="0.5" x2="0" y2="0.5">
              <stop offset="0%" stopColor="hsl(43,90%,55%)" />
              <stop offset="100%" stopColor="hsl(23,90%,55%)" />
            </linearGradient>
            <linearGradient id="pc-blue">
              <stop offset="0%" stopColor="hsl(223,90%,55%)" />
              <stop offset="100%" stopColor="hsl(203,90%,55%)" />
            </linearGradient>
            <linearGradient id="pc-purple" x1="1" y1="0.5" x2="0" y2="0.5">
              <stop offset="0%" stopColor="hsl(283,90%,55%)" />
              <stop offset="100%" stopColor="hsl(263,90%,55%)" />
            </linearGradient>
          </defs>
          <g data-units="d">
            <circle
              className={styles.progressClock__ring}
              cx="128"
              cy="128"
              r="74"
              fill="none"
              opacity="0.1"
              stroke="url(#pc-red)"
              strokeWidth="12"
            />
            <circle
              className={styles.progressClock__ringFill}
              data-ring="mo"
              cx="128"
              cy="128"
              r="74"
              fill="none"
              stroke="url(#pc-red)"
              strokeWidth="12"
              strokeDasharray="465 465"
              strokeDashoffset={465 * (1 - mo_progress)}
              strokeLinecap="round"
              transform="rotate(-90,128,128)"
            />
          </g>
          <g data-units="h">
            <circle
              className={styles.progressClock__ring}
              cx="128"
              cy="128"
              r="90"
              fill="none"
              opacity="0.1"
              stroke="url(#pc-yellow)"
              strokeWidth="12"
            />
            <circle
              className={styles.progressClock__ringFill}
              data-ring="d"
              cx="128"
              cy="128"
              r="90"
              fill="none"
              stroke="url(#pc-yellow)"
              strokeWidth="12"
              strokeDasharray="565.5 565.5"
              strokeDashoffset={565.5 * (1 - d_progress)}
              strokeLinecap="round"
              transform="rotate(-90,128,128)"
            />
          </g>
          <g data-units="m">
            <circle
              className={styles.progressClock__ring}
              cx="128"
              cy="128"
              r="106"
              fill="none"
              opacity="0.1"
              stroke="url(#pc-blue)"
              strokeWidth="12"
            />
            <circle
              className={styles.progressClock__ringFill}
              data-ring="h"
              cx="128"
              cy="128"
              r="106"
              fill="none"
              stroke="url(#pc-blue)"
              strokeWidth="12"
              strokeDasharray="666 666"
              strokeDashoffset={666 * (1 - h_progress)}
              strokeLinecap="round"
              transform="rotate(-90,128,128)"
            />
          </g>
          <g data-units="s">
            <circle
              className={styles.progressClock__ring}
              cx="128"
              cy="128"
              r="122"
              fill="none"
              opacity="0.1"
              stroke="url(#pc-purple)"
              strokeWidth="12"
            />
            <circle
              className={styles.progressClock__ringFill}
              data-ring="m"
              cx="128"
              cy="128"
              r="122"
              fill="none"
              stroke="url(#pc-purple)"
              strokeWidth="12"
              strokeDasharray="766.5 766.5"
              strokeDashoffset={766.5 * (1 - m_progress)}
              strokeLinecap="round"
              transform="rotate(-90,128,128)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ProgressClock;
