import styles from "./EventCom.module.css";
import ButtonCom from "../../common/ButtonCom/ButtonCom";
import CardCom from "../../common/CardCom/CardCom";

const EventCom = () => {
  return (
    <div className={styles.ecmow}>
      <div className={styles.ecmiw}>
        <div className={styles.ecmtcw}>
          <h1>Events</h1>
          <div className={styles.ecmcdsw}>
            <CardCom />
            <CardCom />
            <CardCom />
            <CardCom />
            <CardCom />
          </div>
        </div>
        <div>
          <div>
            <ButtonCom
              btnText={"Application for New Events"}
              btnLink={"/events/application-new-event"}
              btnLayout={'btn1'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCom;
