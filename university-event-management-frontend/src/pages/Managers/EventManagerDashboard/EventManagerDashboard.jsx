import { getReq } from "../../../api/axios";
import PageCom from "../../../components/common/PageCom/PageCom";
import styles from "./EventManagerDashboard.module.css";

import { useEffect, useState } from "react";

// import EventEditForm from "../components/EventEditForm";
// import { getReq } from "../api/axios";
// import EventList from "../components/EventList";

const EventManagerDashboard = () => {
  // const data = [
  //   {
  //     title: "University Event Management System",
  //     navigate: [
  //       {
  //         linkText: "Home",
  //         linkUrl: "/event-manager-dashboard",
  //       },
  //       {
  //         linkText: "Events",
  //         linkUrl: "/event-manager-dashboard/events",
  //       },
  //       {
  //         linkText: "Event Announce",
  //         linkUrl: "#events-announce",
  //       },
  //       {
  //         linkText: "Event Organized",
  //         linkUrl: "/events/add-event",
  //       },
  //       {
  //         linkText: "Event Applications",
  //         linkUrl: "/event-manager-dashboard/event-application",
  //       },
  //     ],
  //   },
  // ];

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getReq("/events");
        setEvents(response.data.data);
        
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);
  

  return (
    <div className={styles.ema}>
      <div className={styles.emb}>
        <aside>
          Side Bar
        </aside>
      </div>
      <div>
        <header>Header</header>
        <div>Context</div>
      </div>
    </div>
  );
};

export default EventManagerDashboard;
