import styles from "./MeshBackground.module.css";

type MeshBackgroundProps = {
  className?: string;
  mirrored?: boolean;
};

export function MeshBackground({
  className = "",
  mirrored = false
}: MeshBackgroundProps) {
  const classes = [styles.mesh, mirrored ? styles.mirrored : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
