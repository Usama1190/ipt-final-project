import Dashboard from "../../../components/common/Dashboard/Dashboard";
import { departNames } from "../../../utils/constant/departNames";
import PageCom from "../../../components/common/PageCom/PageCom";
import Table from "../../../components/common/Table/Table";
import { getReq, postReq } from "../../../api/axios";
import styles from "./EventDashboard.module.css";
import { useEffect, useState } from "react";

const EventDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [eventApps, setEventApps] = useState([]);
  const [events, setEvents] = useState([]);

  console.log(eventApps);
  

  const eventData = {
    departName: "",
    eName: "",
    eDate: "",
    eTime: "",
    eVenue: "",
    shift: "",
    eCost: 0,
    costType: "",
    dueDate: "",
    officialAnnoucement: "",
  };

  const [organizeEvent, setOrganizeEvent] = useState(eventData);

  const asideLinks = [
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
    {
      linkText: "Logout",
      linkUrl: "/",
    },
  ];

  const eventAppsHeadData = {
    studentName: 'Student Name',
    fatherName: 'Father Name',
    studentEmail: 'Email Address',
    gender: 'Gender',
    seatNo: 'Seat No',
    departName: 'Department',
    shift: 'Shift',
    eventName: 'Event Name'
  }

  const eventHeadData = {
    eventName: 'Event Name',
    eventDate: 'Event Date',
    eventTime: 'Event Time',
    eventVenue: 'Event Venue',
    shift: 'Shift',
    departName: 'Depart Name',
    eventCost: 'Event Cost',
    costType: 'Cost Type',
    dueDate: 'Due Date',
    date: 'Official Annoucement'

  }

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
      } catch (error) {
        console.log(error);
      }
    };

    fetchEventApps();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setOrganizeEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      console.log(isLoading);

      const response = await postReq("/events/create-event", organizeEvent);
      console.log(response);
      alert("Submit Application");
      if (response) {
        ("");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error Posting event:", error);
    }
  };

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
                  {asideLinks.map((item, index) => {
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
                <h2>Organize Event</h2>

                <div>
                  <form>
                    <label htmlFor="departName">
                      Department Name :{" "}
                      <select
                        name="departName"
                        id="departName"
                        required
                        value={organizeEvent.departName}
                        onChange={handleChange}
                      >
                        <option value="">Select Department</option>
                        {departNames.map((item, index) => {
                          return <option key={index}>{item}</option>;
                        })}
                      </select>
                    </label>
                    <label htmlFor="eName">
                      Event Name :{" "}
                      <input
                        type="text"
                        name="eName"
                        id="eName"
                        placeholder="eg. sport"
                        required
                        value={organizeEvent.eName}
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="eDate">
                      Event Date :{" "}
                      <input
                        type="date"
                        name="eDate"
                        id="eDate"
                        placeholder="John"
                        required
                        value={organizeEvent.eDate}
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="eTime">
                      Event Time :{" "}
                      <input
                        type="text"
                        name="eTime"
                        id="eTime"
                        placeholder="12:00am to 09:00am sharp"
                        required
                        value={organizeEvent.eTime}
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="eVenue">
                      Event Venue :{" "}
                      <input
                        type="email"
                        name="eVenue"
                        id="eVenue"
                        placeholder="uok"
                        required
                        value={organizeEvent.eVenue}
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="eCost">
                      Event Cost :{" "}
                      <input
                        type="number"
                        name="eCost"
                        id="eCost"
                        placeholder=""
                        min={8}
                        required
                        value={organizeEvent.eCost}
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="costType">
                      Cost Type :{" "}
                      <input
                        type="text"
                        name="costType"
                        id="costType"
                        placeholder=""
                        min={8}
                        required
                        value={organizeEvent.costType}
                        onChange={handleChange}
                      />
                    </label>
                    Shift :{" "}
                    <label htmlFor="morning">
                      <input
                        type="radio"
                        name="shift"
                        id="morning"
                        value="Morning"
                        checked={organizeEvent.shift === "Morning"}
                        onChange={handleChange}
                      />{" "}
                      Morning
                    </label>
                    <label htmlFor="evening">
                      <input
                        type="radio"
                        name="shift"
                        id="evening"
                        value="Evening"
                        checked={organizeEvent.shift === "Evening"}
                        onChange={handleChange}
                      />{" "}
                      Evening
                    </label>
                    <label htmlFor="both">
                      <input
                        type="radio"
                        name="shift"
                        id="both"
                        value="both"
                        checked={organizeEvent.shift === "both"}
                        onChange={handleChange}
                      />{" "}
                      Both
                    </label>
                    <div className={styles.elg}>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className={styles.elh}
                      >
                        Post
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div id="event-applications" className={styles.eme}>
                <h2>Event Applications</h2>
                <div>
                  {eventApps.length > 0 ? (
                    <Table headData={eventAppsHeadData} rowData={eventApps} />
                  ) : (
                    <p>Event Applications Not Found!</p>
                  )}
                </div>
              </div>

              <div id="events" className={styles.eme}>
                <h2>Events</h2>
                <div>
                  {events.length > 0 ? (
                    <Table headData={eventHeadData} rowData={events} />
                  ) : (
                    <p>Events Not Found!</p>
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
