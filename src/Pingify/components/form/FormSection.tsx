import Lottie from "lottie-react";
import { Form } from "./Form";
import styles from "./FormSection.module.scss";
import lockPersonIcon from "../../icons/lockPersonIcon.svg";
import lockIcon from "../../icons/lockIcon.svg";
// import image from "../../images/iphoneImg.webp";
import bigArrow from "../../icons/bigArrowIcon.svg";
import logoAnimation from "../../videos/logo-animation.json";

export function FormSection() {
  return (
    <section className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.leftContainer}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Lottie
              className={styles.animationFrame}
              animationData={logoAnimation}
              autoplay
              initialSegment={[8, 55]}
            />
            <h1
              style={{
                fontSize: "35px",
                fontWeight: "600",
                marginBottom: "5px",
              }}
            >
              Pingify
            </h1>
          </div>
          <p className={styles.subtitle}>
            <strong>Automate</strong> & <strong>Scale</strong> your routine
            voice <br /> calling to patients with <strong>power of</strong>{" "}
            <span>AI</span>
          </p>
          {/* <img src={image} alt="MediPingifyCall calendar" className={styles.formImg} /> */}
          <div className={styles.featureContainer}>
            <p className={styles.green}>Appointments confirmation</p>
            <p className={styles.red}>Cancelation</p>
            <p className={styles.purple}>Rescheduling</p>
            <p className={styles.gray}>Custom actions</p>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.bottom}>
              <p className={styles.bottomTitle}>
                <img src={lockIcon} alt="Secure Icon" /> Secure
              </p>
              <p className={styles.bottomDescription}>
                Data are stored on{" "}
                <strong>
                  secure encrypted <br /> servers
                </strong>{" "}
                and not shared with any 3rd party.
              </p>
            </div>
            <div className={styles.bottom}>
              <p className={styles.bottomTitle}>
                <img src={lockPersonIcon} alt="Private Icon" /> Private
              </p>
              <p className={styles.bottomDescription}>
                Only you have access to the data of your <br /> business, and
                you have full control who <br />
                has access to it.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <img className={styles.arrowIcon} src={bigArrow} alt="Icon" />
          <h2 className={styles.title}>
            Get AI Assistant <br /> for Your Business
          </h2>
          <p className={styles.description}>
            Get a call from <strong>Integration Professional</strong> <br /> and
            set it up and running in the <i>matter of days</i>.
          </p>
          <Form />
          <p className={styles.disclaimer}>
            Due to high demand on AI Voice technology requests are served in the
            order of submission. Submit now to get integrated faster.
          </p>
        </div>
      </div>
    </section>
  );
}
