import { useState } from "react";
import styles from "./CardCom.module.css";
import ButtonCom from "../ButtonCom/ButtonCom";

const CardCom = () => {
  const [isPassOpen, setIsPassOpen] = useState(false);

  const handleClick = () => {
    setIsPassOpen(!isPassOpen);
  };

  return (
    <div>
      <div className={styles.ca}>
        <div className={styles.cb}>
          <button
            className={isPassOpen ? styles.cd : styles.ce}
            onClick={handleClick}
          >
            Depart: UBIT
          </button>
          <button
            className={!isPassOpen ? styles.cd : styles.ce}
            onClick={handleClick}
          >
            Get Event Pass
          </button>
        </div>

        <div className={styles.cc}>
          <div className={`${styles.cf} ${isPassOpen ? styles.cg : styles.ch}`}>
            <h3>Event: Sport (for boys)</h3>
            <ul>
              <li><strong>Sport Type</strong>: Circket Match</li>
              <li><strong>Shift</strong>: Both (Morning & Evening)</li>
              <li><strong>Date</strong>: Feb 27, 25 (Monday)</li>
              <li><strong>Venue</strong>: Jubillee Circket Ground (University of Karchi)</li>
              <li><strong>Timing</strong>: 09:00am - 04:00pm sharp</li>
              <li><strong>Total Sold Passes</strong>: 28</li>
            </ul>
            <p><strong>Note</strong>: Last date for passes purchasing, Feb 25, 25</p>
          </div>
          <div
            className={`${styles.cf} ${!isPassOpen ? styles.cg : styles.ch}`}
          >
            <h3>Event Passes: Avalaible</h3>
            <ul>
              <li><strong>Pass Cost</strong>: RS.249/-</li>
              <li><strong>Cost Type</strong>: Not-Refundable</li>
              <li><strong>Due Date</strong>: Feb 25, 25</li>
              <li><strong>Left Pass</strong>: 12</li>
            </ul>
            <ButtonCom
              btnText={"Generate Pass"}
              btnLayout={"btn2"}
              btnLink={"/generate-pass"}
            />
            <p>Note: After due date Generate Pass are disabled</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCom;
