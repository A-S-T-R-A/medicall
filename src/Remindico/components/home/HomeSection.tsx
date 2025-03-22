import phoneIcon from "../../icons/greenPhoneIcon.svg";
import starsIcon from "../../icons/starsIcon.svg";
import arrowDownIcon from "../../icons/arrowDownIcon.svg";
import outlineIcon from "../../icons/outlineIcon.svg";
// import logoAnimation from "../../videos/logo_animation_remindico.json";
import logoAnimation from "../../videos/logo-animation.json";
import styles from "./HomeSection.module.scss";
// import { Video } from "./Video";
import { scrollToCalendar, scrollToForm } from "../../lib/scrollTo";
import Lottie from "lottie-react";

export function HomeSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.aiAssistant}>
        <img src={starsIcon} alt="icon" />
        AI Voice assistant
      </h2>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Lottie
          className={styles.animationFrame}
          animationData={logoAnimation}
          autoplay
          initialSegment={[8, 55]}
        />
        <h1
          style={{ fontSize: "60px", fontWeight: "600", marginBottom: "10px" }}
        >
          {" "}
          MediCall
        </h1>
      </div>
      {/* <Lottie
        className={styles.animationFrame}
        animationData={logoAnimation}
        autoplay
        initialSegment={[8, 55]}
      /> */}

      <p className={styles.presentation}>
        Hello, I'm MediCall, your <i>AI voice assistant</i> designed{" "}
        <strong>
          to handle <br /> routine calls
        </strong>{" "}
        to your patients. I can call to{" "}
        <span className={styles.greenBg}>confirm appointment</span>
        , <br />
        <span className={styles.purpleBg}>reschedule</span> or{" "}
        <span className={styles.redBg}>cancel visits</span> with natural{" "}
        <strong>
          <i>human-like</i> conversation{" "}
        </strong>
        & <br /> save changes to your calendar or EMR.
      </p>

      <div className={styles.buttonsContainer}>
        <button onClick={scrollToForm} className={styles.freeButton}>
          Start for free
        </button>

        <button onClick={scrollToCalendar} className={styles.testButton}>
          <img src={phoneIcon} alt="Phone icon" />
          Try a test call
        </button>
      </div>

      {/* <Video /> */}

      <p className={styles.description}>
        With <strong>MediCall</strong>, your patients will{" "}
        <strong>never miss an appointment</strong> <br /> again, and you'll{" "}
        <span className={styles.blue}>save</span> on the{" "}
        <span className={styles.blue}>costs</span> of human work.
      </p>

      <div className={styles.helloContainer}>
        <img src={outlineIcon} alt="icon" className={styles.outlineIcon} />
        <p className={styles.helloText}>
          Say <strong>Hello</strong> <br /> to MediCall!
        </p>
        <img
          src={arrowDownIcon}
          alt="Arrow down icon"
          className={styles.arrowDown}
          id="medicall-calendar"
        />
      </div>
    </section>
  );
}
