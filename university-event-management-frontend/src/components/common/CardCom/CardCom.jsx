import { useState } from "react";
import styles from "./CardCom.module.css";

const CardCom = ({ children, data }) => {
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
          {data.title1}
        </button>
        <button
          className={!isPassOpen ? styles.cd : styles.ce}
          onClick={handleClick}
        >
          {data.title2}
        </button>
      </div>

      <div className={styles.cc}>
        <div className={`${styles.cf} ${isPassOpen ? styles.cg : styles.ch}`}>
          {children}
        </div>
        <div className={`${styles.cf} ${!isPassOpen ? styles.cg : styles.ch}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardCom;
