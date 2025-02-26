import { getReq } from "../../../api/axios";
import styles from "./EventDashboard.module.css";
import { useEffect, useState } from "react";
import PageCom from "../../../components/common/PageCom/PageCom";
import Dashboard from "../../../components/common/Dashboard/Dashboard";

// import EventEditForm from "../components/EventEditForm";
// import { getReq } from "../api/axios";
// import EventList from "../components/EventList";

const EventDashboard = () => {
  const data = [
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
    {
      linkText: "Events Approved (Admin)",
      linkUrl: "/event-manager#approved-events-by-admin",
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
      <Dashboard title={"Event Management System"}>
        <PageCom title={"Dr. Prof. Aejaz Khan"}>
          <div className={styles.emb}>
            <div className={styles.emc}>
              <aside>
                <h3>Dashboard</h3>

                <ul>
                  {data.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.linkUrl}>{item.linkText}</a>
                      </li>
                    )
                  })}
                </ul>
              </aside>
            </div>

            <div className={styles.emd}>
              <div>
                Main Content
              </div>

              <div id="events">
                <h2>Events</h2>
              </div>

              <div id="organiz-event">
                <h2>Organiz Events</h2>
              </div>

              <div id="event-applications">
                <h2>Event Applications</h2>
              </div>
            </div>
          </div>
        </PageCom>
      </Dashboard>
    </div>
  );
};

export default EventDashboard;
