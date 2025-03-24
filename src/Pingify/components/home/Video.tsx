import { useRef, useState } from "react";
import clsx from "clsx";
import styles from "./Video.module.scss";
import poster from "../../videos/pingifyPoster.jpeg";
import playSmallIcon from "../../icons/playSmallIcon.svg";
import playBigIcon from "../../icons/playBigIcon.svg";
import roundArrow from "../../icons/roundArrow.svg";

export function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isStarted, setIsStarted] = useState(false);

  function startVideo() {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    setIsStarted(true);
  }

  return (
    <div className={styles.container}>
      <p className={styles.description}>
        <img className={styles.playIcon} src={playSmallIcon} alt="Play" />
        Watch 81 sec demo
        <img className={styles.arrow} src={roundArrow} alt="Arrow" />
      </p>
      {!isStarted && (
        <div className={styles.videoBtn}>
          <button onClick={startVideo} className={styles.playBtn}>
            <img src={playBigIcon} alt="Play" />
          </button>
          <p className={styles.videoText}>
            Click to watch! <span>01:21 sec</span>
          </p>
        </div>
      )}
      <div className={clsx(styles.videoContainer, isStarted && styles.started)}>
        <video
          ref={videoRef}
          disablePictureInPicture
          loop
          playsInline
          muted={!isStarted}
          preload={"metadata"}
          controls={isStarted}
          poster={poster}
          autoPlay
        >
          <source src={"/pingifyDemo.mp4"} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
