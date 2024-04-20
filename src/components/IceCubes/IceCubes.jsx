import styles from "./IceCubes.module.scss";

const IceCubes = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.animate}>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
      </div>
      <h1 className={styles.title}>Анимация фона</h1>
      <h1 className={styles.subtitle}>Кубики льда</h1>
    </div>
  );
};
export default IceCubes;
