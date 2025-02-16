import { useState } from "react";
// import EventForm from "../../components/EventForm";
import styles from './EventAppPage.module.css'
import PageLayCom from "../../components/common/PageLayCom/PageLayCom";

const EventAppPage = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <div className={styles.aneow}>
      <div className={styles.aneiw}>
        <PageLayCom />
        {/* <EventForm addEvent={addEvent} /> */}
      </div>
    </div>
  );
};

export default EventAppPage;
