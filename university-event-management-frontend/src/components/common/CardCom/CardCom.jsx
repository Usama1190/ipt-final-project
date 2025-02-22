import { useState } from "react";
import styles from "./CardCom.module.css";

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
          {data.title1}
        </button>
        <button
          className={!isPassOpen ? styles.cd : styles.ce}
          onClick={handleClick}
        >
          {data.title2}
        </button>
      </div>

      <div>
        <div className={styles.cc}>
          <div className={`${styles.cf} ${isPassOpen ? styles.cg : styles.ch}`}>
            <div className={styles.cj}>
              <ul>
                {data.arrayOne.map((item, index) => {
                  return (
                    <li key={index}>
                      <h3>{item.title}</h3>
                      {item.text && <span>{item.text}: </span>}{" "}
                      <a href={"#"}>{item.link}</a> <span>{item.date}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div
            className={`${styles.cf} ${!isPassOpen ? styles.cg : styles.ch}`}
          >
            <div className={styles.cj}>
              <ul>
                {data.arrayTwo.map((item, index) => {
                  return (
                    <li key={index}>
                      <h3>{item.title}</h3>
                      <a href={"#"}>{item.link}</a> <span>{item.date}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.ci}>
          {isPassOpen ? (
            <p><a href="#go-to-news-and-event-page">Go to News and Event Page ➡</a></p>
          ) : (
            <p>
              Go to results ➡ <a href="#annual-system">Annual System</a> |{" "}
              <a href="#semester-system">Semester System</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardCom;
