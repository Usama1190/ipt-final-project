import styles from "./EventCom.module.css";
// import ButtonCom from "../../common/ButtonCom/ButtonCom";
import CardCom from "../../common/CardCom/CardCom";

const EventCom = () => {
  return (
    <div className={styles.ea}>
      <h1>Events</h1>
      <div className={styles.eb}>
        <CardCom />
        <CardCom />
        <CardCom />
      </div>
    </div>
  );
};

export default EventCom;
