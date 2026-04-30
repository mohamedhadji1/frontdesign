import styles from "./KeystoneMark.module.css";

export function KeystoneMark() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-label="Keystone mark"
      className={styles.mark}
    >
      <path d="M20 18h15v64h20V18Z" fill="#ffffff" />
      <path d="M39 50 65 18h16L55 50l26 32H65L39 50Z" fill="#ffffff" />
      <path d="M46 25h13v50H46V25Z" fill="#ff1616" />
      <path d="M59 50 81 31v15L70 50l11 4v15L59 50Z" fill="#ff1616" />
    </svg>
  );
}
