import styles from "./EventCom.module.css";
import CardCom from "../../common/CardCom/CardCom";

const EventCom = ({data}) => {
  return (
    <div className={styles.ea}>
      <h1>Events</h1>
      <div className={styles.eb}>
        {
          data?.map((item, index) => {
            return (
              <div key={index}>
                <CardCom data={item} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default EventCom;
