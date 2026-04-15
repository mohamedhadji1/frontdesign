import styles from "./ParagraphStack.module.css";

type ParagraphStackProps = {
  paragraphs: string[];
  light?: boolean;
  className?: string;
};

export function ParagraphStack({
  paragraphs,
  light = false,
  className = ""
}: ParagraphStackProps) {
  const classes = [
    styles.stack,
    light ? styles.light : styles.dark,
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
