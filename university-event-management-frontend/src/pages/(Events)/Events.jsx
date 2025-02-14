// import { useEffect, useState } from "react";
// import EventEditForm from "../components/EventEditForm";
// import { getReq } from "../api/axios";
// import EventList from "../components/EventList";

import HeroPageCom from "../../components/common/HeroPageCom/HeroPageCom";
// import EventCom from "../../components/EventCom/EventCom";

const Events = () => {
  // const [events, setEvents] = useState([]);
  // const [editingEvent, setEditingEvent] = useState(null);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const response = await getReq("/events");
  //       setEvents(response.data.data);
  //     } catch (error) {
  //       console.error("Error fetching events:", error);
  //     }
  //   };
  //   fetchEvents();
  // }, []);

  return (
    <div>
      <HeroPageCom />
      {/* <EventCom /> */}
      {/* {editingEvent ? (
        <EventEditForm
          eventToEdit={editingEvent}
          setEvents={setEvents}
          setEditingEvent={setEditingEvent}
        />
      ) : (
        <EventList
          events={events}
          setEvents={setEvents}
          setEditingEvent={setEditingEvent}
        />
      )} */}
    </div>
  );
};

export default Events;
