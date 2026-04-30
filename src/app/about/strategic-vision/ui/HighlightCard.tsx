import Image from "next/image";
import styles from "./HighlightCard.module.css";

type HighlightCardProps = {
  imageSrc: string;
  title: string;
  accent?: boolean;
};

export function HighlightCard({
  imageSrc,
  title,
  accent = true
}: HighlightCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 460px) 100vw, 50vw"
          className={styles.image}
        />
      </div>

      <div className={styles.copy}>
        <motion.h2 className={styles.title}>{title}</motion.h2>
        {accent ? <span className={styles.accent} /> : null}
      </div>
    </article>
  );
}
