// import EventCom from "../../(Events)/EventCom/EventCom";
// import EventManDashLayCom from "../../EventManDashCom/EventManDashLayCom/EventManDashLayCom";
import styles from "./PageCom.module.css";

const PageCom = ({ children, title }) => {
  return (
    <div>
      <div className={styles.pa}>
        <div className={styles.pb}>
          <div className={styles.pba}>
            <h3>{title}</h3>
          </div>
          <div className={styles.pbb}>
            <div className={styles.pbba}></div>
            <div className={styles.pbbb}></div>
            <div className={styles.pbbc}></div>
          </div>
        </div>

        <div className={styles.pc}>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageCom;
