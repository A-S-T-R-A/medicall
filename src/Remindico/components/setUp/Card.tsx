import type { ReactNode } from "react";
import styles from "./Card.module.scss";

type TCardProps = {
  iconData: { icon: string; width: number; height: number };
  title: ReactNode;
  description: string;
};

export function Card(props: TCardProps) {
  const { iconData, title, description } = props;

  return (
    <div className={styles.card}>
      <img
        className={styles.icon}
        src={iconData.icon}
        width={iconData.width}
        height={iconData.height}
        alt="icon"
      />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
