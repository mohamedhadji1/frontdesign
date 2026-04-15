import { KeystoneMark } from "./KeystoneMark";
import styles from "./BrandHex.module.css";

export function BrandHex() {
  return (
    <div className={styles.shell} aria-hidden="true">
      <div className={styles.outer}>
        <div className={styles.inner}>
          <KeystoneMark />
        </div>
      </div>
      <span className={styles.leftAccent} />
      <span className={styles.rightAccent} />
    </div>
  );
}
