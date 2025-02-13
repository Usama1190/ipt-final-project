import EventCardCom from "../common/EventCardCom/EventCardCom";
import styles from "./EventCom.module.css";
import ButtonCom from "../common/ButtonCom/ButtonCom";
import EventStaticCardCom from "../common/EventStaticCardCom/EventStaticCardCom";

const EventCom = () => {
  return (
    <div className={styles.ecmow}>
      <div className={styles.ecmiw}>
        <div className={styles.ecmtcw}>
          <h1>Events</h1>
          <div className={styles.ecmcdsw}>
            <EventCardCom />
            <EventCardCom />
            <EventCardCom />
            <EventCardCom />
            <EventCardCom />
          </div>
        </div>
        <div>
          <div>
            <EventStaticCardCom />
            <ButtonCom
              btnText={"Application for New Events"}
              btnLink={"/application"}
              btnLayout={'btn1'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCom;
