import styles from "./GlassTable.module.scss";

const GlassTable = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>Колонка 1</th>
              <th className={styles.th}>Колонка 2</th>
              <th className={styles.th}>Колонка 3</th>
              <th className={styles.th}>Колонка 4</th>
              <th className={styles.th}>Колонка 5</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {[...Array(5)].map((_, i) => (
              <tr key={i} className={styles.tr}>
                <td className={styles.td}>Ячейка 1</td>
                <td className={styles.td}>Ячейка 2</td>
                <td className={styles.td}>Ячейка 3</td>
                <td className={styles.td}>Ячейка 4</td>
                <td className={styles.td}>Ячейка 5</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GlassTable;
