import lightMedicallIcon from "../../icons/lightMedicallIcon.svg";
import styles from "./PingifyCalling.module.scss";

type TPingifyCallingProps = {
  isOpen: boolean;
};

export function PingifyCalling({ isOpen }: TPingifyCallingProps) {
  return (
    <div className={`${styles.container} ${isOpen && styles.open}`}>
      <div className={styles.contentContainer}>
        <img
          src={lightMedicallIcon}
          alt="Pingify Calling"
          className={styles.remindicoIcon}
        />

        <div className={styles.content}>
          <p className={styles.title}>Pingify</p>
          <p className={styles.description}>is calling...</p>
        </div>
      </div>
    </div>
  );
}
