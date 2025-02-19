import { getReq } from "../../../api/axios";
import PageCom from "../../../components/common/PageCom/PageCom";
import styles from "./EventManagerDashboard.module.css";

import { useEffect, useState } from "react";

// import EventEditForm from "../components/EventEditForm";
// import { getReq } from "../api/axios";
// import EventList from "../components/EventList";

const EventManagerDashboard = () => {
  const data = [
    {
      title: "Event Management System of University of Karachi",
      navigate: [
        {
          linkText: "Dashboard",
          linkUrl: "/event-manager",
        },
        {
          linkText: "Event Listing",
          linkUrl: "/event-manager#events",
        },
        {
          linkText: "Event Organized",
          linkUrl: "/event-manager#organize-event",
        },
        {
          linkText: "Event Applications (Students)",
          linkUrl: "/event-manager#event-applications",
        },
        ,
        {
          linkText: "Events Approved (Admin)",
          linkUrl: "/event-manager#approved-events-by-admin",
        },
      ],
    },
  ];

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
        <PageCom data={data} />
      </div>
    </div>
  );
};

export default EventManagerDashboard;
