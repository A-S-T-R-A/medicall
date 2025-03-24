import Lottie from "lottie-react";
import styles from "./IntroducingRemindico.module.scss";
import video from "../../videos/introducinSection.mp4";
import animation from "../../videos/logo-animation.json";

export function IntroducingRemindico() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Introducing Pingify: The Ultimate AI Voice Assistant for Your
            Business
          </h2>

          <p className={styles.text}>
            <strong>Experience a new era of efficiency with Pingify,</strong> an{" "}
            <strong>AI Voice Assistant</strong> powered by advanced{" "}
            <strong>Real-Time Voice</strong> AI technology. Designed to
            seamlessly integrate into any <strong>CRM system</strong>, Pingify
            revolutionizes the way businesses manage appointments and interact
            with clients.
          </p>

          <h3 className={styles.subtitle}>
            Reinventing Appointment Management with AI-Powered Voice Assistant
          </h3>

          <p className={styles.text}>
            <strong>
              Pingify is not just another Conversational AI Assistant;
            </strong>{" "}
            it's a comprehensive solution that can replace your front desk
            operations entirely. By leveraging the power of the
            <strong>ChatGPT Voice Assistant</strong>, Pingify automates tasks
            such as:
          </p>
          <ol>
            <li>
              <strong>Pulling Events and Appointments:</strong> Sync
              effortlessly with your existing calendars.
            </li>
            <li>
              <strong>Automated Calling:</strong> Automatically call to confirm
              appointments with patients or clients.
            </li>
            <li>
              <strong>Modifying or Cancelling Appointments:</strong> Make
              changes on the fly with simple voice commands.
            </li>
            <li>
              <strong>Real-Time Notifications:</strong> Inform patients of
              appointment changes that require confirmation.
            </li>
          </ol>

          <h3 className={styles.subtitle}>
            Seamless Integration with Your Systems
          </h3>
          <p className={styles.text}>
            <strong>
              One of Pingify's standout features is its ability to integrate
              into any CRM system.
            </strong>{" "}
            Our <strong>AI-Powered Voice Assistant for Business</strong> ensures
            a smooth setup process:
          </p>
          <ol>
            <li>
              <strong>Simple Interface:</strong> User-friendly design that
              requires minimal training.
            </li>
            <li>
              <strong>Customizable Solutions:</strong> Tailor the assistant to
              fit your specific operational needs.
            </li>
            <li>
              <strong>Developer Support:</strong> While Pingify is a product and
              not an API, our team provides full support during the integration
              process.
            </li>
          </ol>

          <h3 className={styles.subtitle}>
            Enhance Customer Service with Natural Language Voice Assistant
          </h3>
          <p className={styles.text}>
            <strong>Pingify utilizes Natural Language Processing</strong> to
            understand and respond to clients in a way that feels personal and
            engaging. This <strong>Advanced AI</strong> Voice Assistant ensures:
          </p>
          <ol>
            <li>
              <strong>Improved Client Interactions:</strong> Offer a level of
              service that rivals human interaction.
            </li>
            <li>
              <strong>Efficiency and Accuracy:</strong> Reduce the possibility
              of human error in scheduling.
            </li>
            <li>
              <strong>24/7 Availability:</strong> Provide assistance to clients
              at any time, without the constraints of business hours.
            </li>
          </ol>

          <h3 className={styles.subtitle}>
            Why Pingify is the Best AI Voice Assistant for Customer Service
          </h3>
          <p className={styles.text}>
            <strong>
              In a world where customer satisfaction is paramount, Pingify
              stands out as the best AI voice assistant for customer service.
            </strong>{" "}
            Here's why:
          </p>
          <ol>
            <li>
              <strong>Real-Time Voice AI:</strong> Experience instant
              communication and responses.
            </li>
            <li>
              <strong>
                Conversational AI with Natural Language Processing:
              </strong>{" "}
              Engage clients in meaningful conversations.
            </li>
            <li>
              <strong>Automated Workflows:</strong> Free up your staff to focus
              on more strategic tasks.
            </li>
          </ol>

          <h3 className={styles.subtitle}>
            Transform Your Business Operations
          </h3>
          <p className={styles.text}>
            <strong>
              Businesses that deal with appointments—be it healthcare providers,
              salons, or professional services—can greatly benefit from Pingify:
            </strong>
          </p>
          <ol>
            <li>
              Replace Front Desk Operations: Accepting calls and making calls to
              patients becomes fully automated.
            </li>
            <li>
              Reduce Operational Costs: Save on staffing without compromising
              service quality.
            </li>
            <li>
              Increase Productivity: Allow your team to focus on what they do
              best.
            </li>
          </ol>

          <h3 className={styles.subtitle}>Get Started with Pingify Today</h3>
          <p className={styles.text}>
            <strong>
              Ready to revolutionize your appointment management? Request a demo
            </strong>{" "}
            of Pingify and see how easily it integrates into your CRM system.
          </p>
          <ol>
            <li>
              <strong>Quick Integration:</strong> Our team will assist you in
              setting up Pingify with minimal disruption to your operations.
            </li>
            <li>
              <strong>Experience the Future:</strong> Embrace the capabilities
              of an AI voice assistant for healthcare and other industries.
            </li>
            <li>
              <strong>Stay Ahead of the Curve:</strong> Adopt cutting-edge
              technology that sets you apart from the competition.
            </li>
          </ol>
        </div>
        <div className={styles.videoContainer}>
          <video
            disablePictureInPicture
            loop
            playsInline
            muted
            preload={"metadata"}
            autoPlay
          >
            <source src={video} type="video/mp4" />
          </video>
          <Lottie
            className={styles.animationFrame}
            animationData={animation}
            autoplay
            initialSegment={[8, 55]}
          />
        </div>
      </div>
    </div>
  );
}
