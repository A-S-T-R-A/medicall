import styles from "./AppointmentModal.module.scss";
import phoneIcon from "../../icons/whitePhoneIcon.svg";
import { useState } from "react";
import type { TAppointment } from "./types";
import { postCreateAppointment, postSendReminder } from "./services/services";

type TAppointmentModalProps = {
  appointment: TAppointment;
  isOpen: boolean;
  onSubmit: () => void;
};

export function AppointmentModal({
  isOpen,
  onSubmit,
  appointment,
}: TAppointmentModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const phone = formData.get("phone");

    const dataToSend: TAppointment = {
      ...appointment,
      clientName: name as string,
      clientPhone: phone as string,
    };

    setIsLoading(true);

    try {
      postCreateAppointment(dataToSend).then(() => {
        postSendReminder({ appointmentId: appointment.id });
      });

      onSubmit();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={`${styles.modalContainer} ${!isOpen && styles.hide}`}>
      <div>
        <form onSubmit={submitHandler} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            name="name"
            id="calendar-name-input"
          />

          <input
            className={styles.input}
            type="tel"
            placeholder="Your direct phone"
            required
            name="phone"
          />

          <p className={styles.description}>
            Enter your name and phone number,{" "}
            <strong>MediCall will call you instantly</strong> to confirm
            upcoming appointment.
          </p>

          <button className={styles.button} type="submit" disabled={isLoading}>
            <img src={phoneIcon} alt="icon" />
            Get a test call
          </button>
        </form>
      </div>
    </div>
  );
}
