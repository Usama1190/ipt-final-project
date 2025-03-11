import { useState } from "react";
import ButtonCom from "../../common/ButtonCom/ButtonCom";
import styles from "./EventCom.module.css";

const EventCom = ({ data }) => {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div className={styles.ena}>
      <div className={styles.enb}>
        <div>
          <p>
            <strong>Department : {data?.departName}</strong>
          </p>
          <p>
            <b>Event :</b> <strong>{data?.eventName}</strong>
          </p>
          <p>{data?.eventDate}</p>
        </div>
        <div>
          <p className={styles.end} onClick={handleModal}>
            {!isModal ? "View more" : "View less"}
          </p>
        </div>
      </div>
      <div className={!isModal ? styles.dn : styles.db}>
        <div className={styles.enc}>
          <div>
            <p>
              <b>Shift :</b> <strong>{data?.shift}</strong>
            </p>
            <p>
              <b>Event Post :</b> <strong>{data?.date}</strong>
            </p>
            <p>
              <b>Event Time :</b> <strong>{data?.eventTime}</strong>
            </p>
            <p>
              <b>Event Venue :</b> <strong>{data?.eventVenue}</strong>
            </p>
          </div>
          <div>
            <p>
              <b>Pass :</b> <strong>{`Rs.${data?.eventCost}/-`}</strong>
            </p>
            <p>
              <b>Type :</b> <strong>{data?.costType}</strong>
            </p>
            <p>
              <b>Expire :</b> <strong>{data?.dueDate}</strong>
            </p>
            <div>
              <ButtonCom
                btnLayout={"btn2"}
                btnText={"Get Pass"}
                btnLink={"#get-pass"}
              />
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default EventCom;
