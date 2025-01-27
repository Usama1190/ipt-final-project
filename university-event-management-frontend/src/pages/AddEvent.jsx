import { useState } from "react";
import EventForm from "../components/EventForm";

const AddEvent = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <div>
        Hello
      <EventForm addEvent={addEvent} />
    </div>
  );
};

export default AddEvent;
