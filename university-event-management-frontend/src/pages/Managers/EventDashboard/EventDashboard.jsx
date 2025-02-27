import { getReq } from "../../../api/axios";
import styles from "./EventDashboard.module.css";
import { useEffect, useState } from "react";
import PageCom from "../../../components/common/PageCom/PageCom";
import Dashboard from "../../../components/common/Dashboard/Dashboard";
import EventCom from "../../../components/(Events)/EventCom/EventCom";

const EventDashboard = () => {
  const data = [
    {
      linkText: "Dashboard",
      linkUrl: "/event-manager",
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
      linkText: "Events (Edit / Delete)",
      linkUrl: "/event-manager#events",
    },
    {
      linkText: "Events Approved (Admin)",
      linkUrl: "/event-manager#approved-events-by-admin",
    },
  ];

  const tableHeadData = [
    "Sno.",
    "Student Name",
    "Father Name",
    "Email Address",
    "Gender",
    "Seat No.",
    "Department",
    "Shift",
    "Event Name",
    "Request"
  ];

  const [events, setEvents] = useState([]);
  const [eventApps, setEventApps] = useState([]);

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

    const fetchEventApps = async () => {
      try {
        const getAllEventApps = await getReq("/eventapps");
        setEventApps(getAllEventApps.data.data);
        console.log("getAllEventApps", getAllEventApps);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEventApps();
  }, []);

  console.log("events", events);

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
                    );
                  })}
                </ul>
              </aside>
            </div>

            <div className={styles.emd}>
              <div className={styles.eme}>Main Content</div>

              <div id="organiz-event" className={styles.eme}>
                <h2>Organiz Events</h2>
              </div>

              <div id="event-applications" className={styles.eme}>
                <h2>Event Applications</h2>

                <div>
                  <table>
                    <thead>
                      { tableHeadData.map((item, index) => {
                        return (
                          <th key={index}>{item}</th>
                        )
                      })}
                    </thead>
                    {eventApps.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item?.studentName}</td>
                          <td>{item?.fatherName}</td>
                          <td>{item?.studentEmail}</td>
                          <td>{item?.gender || "male"}</td>
                          <td>{item?.seatNo}</td>
                          <td>{item?.departName}</td>
                          <td>{item?.shift}</td>
                          <td>{item?.eventName}</td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
              </div>

              <div id="events" className={styles.eme}>
                <h2>Events</h2>
                <div className={styles.eld}>
                  {events.length > 0 ? (
                    events?.map((item, index) => {
                      return (
                        <div key={index} className={styles.ele}>
                          <EventCom data={item} />
                        </div>
                      );
                    })
                  ) : (
                    <div className={styles.elc}>
                      <p>Events Not Found!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </PageCom>
      </Dashboard>
    </div>
  );
};

export default EventDashboard;
