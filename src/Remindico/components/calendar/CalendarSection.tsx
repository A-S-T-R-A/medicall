import { Calendar } from "./Calendar";
import styles from "./CalendarSection.module.scss";
import greenPhone from "../../icons/greenPhoneIcon.svg";

export function CalendarSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <img src={greenPhone} alt="icon" />
        Hear it yourself
      </h2>

      <p className={styles.description}>
        Embrace the <strong>magic of AI</strong> and natural conversation:{" "}
        <br /> get an <strong>instant test call</strong> from Pingify for
        appointment <br /> confirmation - try it in action!
      </p>

      <Calendar />
    </section>
  );
}
