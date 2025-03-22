import styles from "./Form.module.scss";
import { useState } from "react";
import clsx from "clsx";

export function Form() {
  const [isSubmitting] = useState(false);
  const [result] = useState<"success" | "error" | undefined>(undefined);

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // if (isSubmitting) return;

    // const formData = new FormData(event.currentTarget);

    // const name = formData.get("name");
    // const phone = formData.get("phone");
    // const email = formData.get("email");

    // const dataToSend = {
    //   name,
    //   phone,
    //   email,
    // };

    // try {
    //   setIsSubmitting(true);
    //   setResult(undefined);
    //   await fetch("https://backend-remindico-dev.aux-estimato.xyz/form", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(dataToSend),
    //   });
    //   setResult("success");
    // } catch (error) {
    //   console.log(error);
    //   setResult("error");
    // } finally {
    //   setIsSubmitting(false);
    // }
  }

  return (
    <form
      id="remindico-bottom-form"
      onSubmit={submitHandler}
      className={styles.container}
    >
      <input
        className={styles.input}
        id="form-name-input"
        type="text"
        placeholder="Full name"
        required
        name="name"
      />

      <input
        className={styles.input}
        type="tel"
        placeholder="Your direct phone"
        required
        name="phone"
      />

      <input
        className={styles.input}
        type="email"
        placeholder="Your email"
        required
        name="email"
      />

      {result === undefined &&
        (isSubmitting ? (
          <button className={styles.button} type="submit" disabled>
            Submitting...
          </button>
        ) : (
          <button className={styles.button} type="submit">
            Get a Demo with Professional
          </button>
        ))}

      {result === "success" && (
        <button className={clsx(styles.button, styles.success)} type="submit">
          Success
        </button>
      )}

      {result === "error" && (
        <button className={clsx(styles.button, styles.error)} type="submit">
          Error
        </button>
      )}
    </form>
  );
}
