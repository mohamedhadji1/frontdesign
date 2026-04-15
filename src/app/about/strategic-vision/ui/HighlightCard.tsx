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
        <h3 className={styles.title}>{title}</h3>
        {accent ? <span className={styles.accent} /> : null}
      </div>
    </article>
  );
}
