import { ReactNode } from "react";
import styles from "./FeatureHex.module.css";

type FeatureHexProps = {
  icon: ReactNode;
  label: string;
};

export function FeatureHex({ icon, label }: FeatureHexProps) {
  return (
    <div className={styles.item}>
      <div className={styles.frame}>
        <div className={styles.outer}>
          <div className={styles.inner}>{icon}</div>
        </div>
      </div>
      <p className={styles.label}>{label}</p>
      <span className={styles.accent} />
    </div>
  );
}
