import styles from "./StartFreeModal.module.scss";
import { scrollToForm } from "../../lib/scrollTo";

type TStartFreeModalProps = {
  isOpen: boolean;
  onCallAgain: () => void;
};

export function StartFreeModal({ isOpen, onCallAgain }: TStartFreeModalProps) {
  return (
    <div className={`${styles.modalContainer} ${isOpen && styles.open}`}>
      <div>
        <div className={styles.content}>
          <h3 className={styles.title}>
            Like it? <strong>Scale it!</strong>
          </h3>
          <p className={styles.description}>
            <strong>Imagine</strong> how many <strong>hundreds of calls</strong>{" "}
            Pingify can automate for your business and{" "}
            <strong>save thousands</strong> of men hours of work, while boosting
            your confirmation rate & revenue.
          </p>

          <div className={styles.btnsContainer}>
            <button className={styles.button} onClick={scrollToForm}>
              Start for free
            </button>

            <button onClick={onCallAgain} className={styles.callBtn}>
              Call Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
