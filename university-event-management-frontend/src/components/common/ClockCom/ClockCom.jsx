import { useEffect, useState } from "react";
import styles from "./ClockCom.module.css";

const ClockCom = () => {
  const [time, setTime] = useState(new Date());
  const hours = time.getHours() % 12 || 12; // 0 ko 12 banana
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const amPm = time.getHours() >= 12 ? "pm" : "am";

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={styles.emm}>
        <h3>Clock</h3>
        <div className={styles.emo}>
          <h2>{`${
            hours < 10 ? "0" + hours : hours
          } : ${minutes} : ${seconds}`}</h2>
          <p>{amPm}</p>
        </div>
      </div>

      <h3>Office Timing</h3>
      <div className={styles.emn}>
        <p>09:00pm to 05:00pm sharp</p>
        {hours >= 9 && amPm == "pm" ? (
          <strong>Open</strong>
        ) : (
          <small>Close</small>
        )}
      </div>
    </div>
  );
};

export default ClockCom;
