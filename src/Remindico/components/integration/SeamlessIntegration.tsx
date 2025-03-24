import { BottomMarquee } from "./BottomMarquee";
import styles from "./SeamlessIntegration.module.scss";
import { TopMarquee } from "./TopMarquee";

export function SeamlessIntegration() {
  return (
    <section className={styles.container}>
      <TopMarquee />
      <div className={styles.content}>
        <h2 className={styles.title}>Connect to Anything</h2>
        <p className={styles.description}>
          There is NO need to change software. Pingify will integrate into
          whatever you have right now. New superpower with no additional
          efforts.
        </p>
      </div>
      <BottomMarquee />
    </section>
  );
}
