import { useState } from "react";
import styles from "./Faq.module.scss";
import { scrollToForm } from "../../lib/scrollTo";
import chevronDown from "../../icons/chevronDown.svg";

const faqs = [
  {
    question: "How does Pingify integrate with my existing CRM system?",
    answer: `Pingify is designed for seamless integration. Our technical team will guide you
    through the process, ensuring that all your calendars and appointment data are
    synced.`,
  },
  {
    question: "Can Pingify handle appointment modifications and cancellations?",
    answer: `Yes, Pingify can modify dates, cancel appointments, and notify clients of any changes that need confirmation.`,
  },
  {
    question: "Is Pingify suitable for businesses outside of healthcare?",
    answer: `Absolutely. Any business that deals with appointments can benefit from Pingify's capabilities.`,
  },
];

export function Faq() {
  const [openedQuestions, setIsOpenedQuestions] = useState<number[]>([]);

  function openCloseHandler(index: number) {
    if (openedQuestions.includes(index)) {
      setIsOpenedQuestions((prev) => prev.filter((item) => item !== index));
      return;
    }

    setIsOpenedQuestions((prev) => [...prev, index]);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Frequently Asked <br /> Questions
        </h2>

        <div className={styles.faq}>
          {faqs.map((item, index) => {
            const { answer, question } = item;

            return (
              <div
                key={index}
                onClick={() => openCloseHandler(index)}
                className={`${styles.questionContainer} ${
                  openedQuestions.includes(index) && styles.opened
                }`}
              >
                <div className={styles.question}>
                  <p className={styles.questionText}>{question}</p>
                  <div className={styles.iconContainer}>
                    <img src={chevronDown} alt="Chevron icon" />
                  </div>
                </div>

                <div className={styles.answerContainer}>
                  <div>
                    <p className={styles.answer}>{answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <Squircle
          cornerSmoothing={1}
          cornerRadius={18}
          className={styles.buttonContainer}
        >
          <Squircle
            cornerSmoothing={1}
            cornerRadius={15}
            className={styles.button}
          >
            <button onClick={scrollToForm}>Do you have more quastions?</button>
          </Squircle>
        </Squircle> */}
        <button className={styles.button} onClick={scrollToForm}>
          Do you have more quastions?
        </button>
      </div>
    </div>
  );
}
