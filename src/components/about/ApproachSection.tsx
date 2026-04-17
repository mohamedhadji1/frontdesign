import Image from "next/image";
import styles from "./ApproachSection.module.css";

export function ApproachSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.eyebrow}>KEYSTONE&apos;S APPROACH</h2>

        <div className={styles.imageWrapper}>
          <Image
            src="/background/approach.png"
            alt="Keystone Approach Diagram"
            width={1200}
            height={800}
            className={styles.approachImage}
          />
        </div>
      </div>
    </section>
  );
}
