import ButtonCom from "../../common/ButtonCom/ButtonCom";
import styles from "./EventCom.module.css";

const EventCom = ({ data }) => {
  return (
    <div className={styles.ena}>
        <h4>Department: {data?.depart || "UBIT"}</h4>
      <div className={styles.enb}>
        <span><strong>Event:</strong> {data?.eventType || "Sport"}</span>
        <span><strong>Shift:</strong> {data?.shift || "Both (Morning & Evening)"}</span>
        <span><strong>Event Date:</strong> {data?.date || "Fri, Feb 27, 25"}</span>
        <span><strong>Event Time:</strong> {data?.time || "15:00pm - 18:00pm (Evening)"}</span>
        <span><strong>Event Venue:</strong> {data?.venue || "UBIT"}</span>
        <span><strong>Event Pass Cost:</strong> {data?.cost || 'RS.249/-'}</span>
        <span><strong>Cost Type:</strong> {data?.costType || 'Not Refundable'}</span>
        <span><strong>Pass Expired:</strong> {data?.dueDate || 'Wed, Feb 25, 25'}</span>
        <span><ButtonCom btnLayout={'btn2'} btnText={'Get Pass'} btnLink={'#get-pass'} /></span>
      </div>
      <p><strong>Note:</strong> {data?.note || 'After due date Get Pass Button are disabled.'}</p>
    </div>
  );
};

export default EventCom;
