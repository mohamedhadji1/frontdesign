import { ArrowRightIcon } from "./icons";
import styles from "./PrimaryButton.module.css";

type PrimaryButtonProps = {
  label: string;
  href?: string;
};

export function PrimaryButton({
  label,
  href = "#"
}: PrimaryButtonProps) {
  return (
    <a href={href} className={styles.button}>
      <span>{label}</span>
      <ArrowRightIcon className={styles.icon} />
    </a>
  );
}
