import styles from "./EventCom.module.css";
import { useState } from "react";

const EventCom = ({ data }) => {
  const [isModal, setIsModal] = useState(false);
  const { departName, eName, shift, eTime, eVenue, eCost, costType } = data;

  const handleModal = () => {
    setIsModal(!isModal);
  };

  const isEdate = data?.eDate;
  const onlyeDate = isEdate.split("T")[0];

  const isPdate = data?.createdAt;
  const postDate = isPdate.split("T")[0];

  return (
    <div className={styles.ena}>
      <div className={styles.enb}>
        <div>
          <p>
            <strong>Department : {departName}</strong>
          </p>
          <p>
            <b>Event :</b> <strong>{eName}</strong>
          </p>
          <p>{onlyeDate}</p>
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
              <b>Shift :</b> <strong>{shift}</strong>
            </p>
            <p>
              <b>Event Post :</b> <strong>{postDate}</strong>
            </p>
            <p>
              <b>Event Time :</b> <strong>{eTime}</strong>
            </p>
            <p>
              <b>Event Venue :</b> <strong>{eVenue}</strong>
            </p>
          </div>
          <div>
            <p>Pass Details</p>
            {eCost === 0 ? (
              <p>
                <b>Pass :</b> <strong>Free</strong>
              </p>
            ) : (
              <div className={styles.ene}>
                <div>
                <p>
                  <b>Pass :</b> <strong>{`Rs.${eCost}/-`}</strong>
                </p>
                <p>
                  <b>Type :</b> <strong>{costType}</strong>
                </p>
                </div>
                <div>
                  <button className="btn3">Get Pass</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCom;
