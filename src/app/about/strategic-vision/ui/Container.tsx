import { ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  const classes = [styles.container, className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
}
