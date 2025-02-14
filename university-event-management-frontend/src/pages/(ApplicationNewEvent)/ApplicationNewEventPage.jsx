import { useState } from "react";
// import EventForm from "../../components/EventForm";
import styles from './ApplicationNewEventPage.module.css'
import HeroPageCom from "../../components/common/HeroPageCom/HeroPageCom";

const ApplicationNewEvent = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <div className={styles.aneow}>
      <div className={styles.aneiw}>
        <HeroPageCom />
        {/* <EventForm addEvent={addEvent} /> */}
      </div>
    </div>
  );
};

export default ApplicationNewEvent;
