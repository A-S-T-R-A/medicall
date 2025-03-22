import styles from "./EasySetUpSection.module.scss";
import calendarIcon from "../../icons/connectToCalendarIcon.svg";
import reminderCallsIcon from "../..//icons/reminderCalls.svg";
import aiCallsIcon from "../..//icons/aiCallsIcon.svg";
import finalizeDecisionIcon from "../..//icons/finalizeDecisionIcon.svg";
import conversationHistoryIcon from "../..//icons/conversationHistoryIcon.svg";
import { Card } from "./Card";
import type { ReactNode } from "react";

const data: {
  iconData: { icon: string; width: number; height: number };
  title: ReactNode;
  description: string;
}[] = [
  {
    iconData: { icon: calendarIcon, width: 84, height: 79 },
    title: (
      <>
        Connect to your <br /> calendar app
      </>
    ),
    description:
      "Start by connecting your current calendar provider to MediCall. No need to change anything – MediCall will integrate into your current software setup.",
  },

  {
    iconData: { icon: reminderCallsIcon, width: 84, height: 79 },
    title: (
      <>
        Configure <br /> Reminder Calls
      </>
    ),
    description:
      "Set custom rules for confirmation calls, like 1 day before the appointment, repeat 2-3 times if person did not pick-up etc.",
  },
  {
    iconData: { icon: aiCallsIcon, width: 84, height: 79 },
    title: (
      <>
        AI makes calls <br /> Fully Automatically
      </>
    ),
    description: "AI takes all routine work",
  },
  {
    iconData: { icon: finalizeDecisionIcon, width: 153, height: 98 },
    title: (
      <>
        Finalize <br /> the Decision
      </>
    ),
    description:
      "Evaluate the AI's result and confirm, reject or adjust the appointment as needed.",
  },
  {
    iconData: { icon: conversationHistoryIcon, width: 112, height: 87 },
    title: (
      <>
        Check Conversation <br /> History
      </>
    ),
    description:
      "Review all AI interactions on the MediCall platform to ensure communication quality.",
  },
];

export function EasySetUpSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Easy Set Up</h2>
      <p className={styles.description}>
        Easy steps how you will set up MediCall once. <br /> Then check and
        maintain quality.
      </p>
      <div className={styles.cardsContainer}>
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
