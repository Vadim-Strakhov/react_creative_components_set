import styles from "./GridVideo.module.scss";

const GridVideo = () => {
  const titles = Array.from({ length: 50 }, (_, i) => `Заголовок ${i + 1}`);

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        src="https://vkvd489.okcdn.ru/?srcIp=46.159.30.150&pr=40&expires=1740102309306&srcAg=CHROME&fromCache=1&ms=45.136.22.189&type=5&sig=peB3e_O60No&ct=0&urls=185.226.52.202&clientType=13&appId=512000384397&zs=88%3B13&id=7544585914934"
        autoPlay
        loop
        muted
      />
      <div className={styles.grid}>
        {titles.map((title, index) => (
          <div key={index}>
            <div>{title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridVideo;
