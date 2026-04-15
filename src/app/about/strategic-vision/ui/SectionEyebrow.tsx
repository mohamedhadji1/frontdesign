import styles from "./SectionEyebrow.module.css";

type SectionEyebrowProps = {
  label: string;
  light?: boolean;
};

export function SectionEyebrow({
  label,
  light = true
}: SectionEyebrowProps) {
  const classes = [styles.eyebrow, light ? styles.light : styles.dark]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <span>{label}</span>
    </div>
  );
}
