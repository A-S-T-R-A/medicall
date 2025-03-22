import lightMedicallIcon from "../../icons/lightMedicallIcon.svg";
import styles from "./RemindicoCalling.module.scss";

type TRemindicoCallingProps = {
  isOpen: boolean;
};

export function RemindicoCalling({ isOpen }: TRemindicoCallingProps) {
  return (
    <div className={`${styles.container} ${isOpen && styles.open}`}>
      <div className={styles.contentContainer}>
        <img
          src={lightMedicallIcon}
          alt="Medicall Calling"
          className={styles.remindicoIcon}
        />

        <div className={styles.content}>
          <p className={styles.title}>MediCall</p>
          <p className={styles.description}>is calling...</p>
        </div>
      </div>
    </div>
  );
}
