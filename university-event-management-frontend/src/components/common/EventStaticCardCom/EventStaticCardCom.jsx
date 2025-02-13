import styles from "./EventStaticCardCom.module.css";

const EventStaticCardCom = () => {

  return (
    <div>
      <div className={styles.ecdw}>
        <div className={styles.ecdbw}>
          <div>Application</div>
          <div></div>
        </div>

        <div className={styles.ecdcw}>
          <div className={`${styles.ecdc}`}>
            <h3>Event: Sport (for boys)</h3>
            <ul>
              <li><strong>Sport Type</strong>: Circket Match</li>
              <li><strong>Shift</strong>: Both (Morning & Evening)</li>
              <li><strong>Date</strong>: Feb 27, 25 (Monday)</li>
              <li><strong>Timing</strong>: 09:00am - 04:00pm sharp</li>
              <li><strong>Total Sold Passes</strong>: 28</li>
            </ul>
            <p><strong>Note</strong>: Last date for passes purchasing, Feb 25, 25</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventStaticCardCom;
