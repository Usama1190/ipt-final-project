import { useState } from "react";
import styles from "./CardCom.module.css";
// import ButtonCom from "../ButtonCom/ButtonCom";
import EventDetailCom from "../../(Events)/EventDetailCom/EventDetailCom";
import CostDetailCom from "../../(Events)/CostDetailCom/CostDetailCom";

const CardCom = ({ data }) => {
  const [isPassOpen, setIsPassOpen] = useState(false);

  const handleClick = () => {
    setIsPassOpen(!isPassOpen);
  };

  return (
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
          <div>
            <h3>Event Sport</h3>
            <div>
              <EventDetailCom />
            </div>
          </div>
        </div>
        <div className={`${styles.cf} ${!isPassOpen ? styles.cg : styles.ch}`}>
          <div>
            <h3>Event Passes: Avalaible</h3>
            <div>
              <CostDetailCom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCom;
