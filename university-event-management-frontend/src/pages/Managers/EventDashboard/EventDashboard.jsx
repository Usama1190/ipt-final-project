import Dashboard from "../../../components/common/Dashboard/Dashboard";
import { departNames } from "../../../utils/constant/departNames";
import PageCom from "../../../components/common/PageCom/PageCom";
import Table from "../../../components/common/Table/Table";
import { getReq, postReq } from "../../../api/axios";
import styles from "./EventDashboard.module.css";
import { useEffect, useState } from "react";

const EventDashboard = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [eventApps, setEventApps] = useState([]);
  const [events, setEvents] = useState([]);

  const eventData = {
    departName: "",
    eName: "",
    shift: "",
    eDate: "",
    eTime: "",
    eVenue: "",
    eCost: 0,
    costType: "",
    dueDate: '',
    officialAnnounce: ''
  };

  const [organizeEvent, setOrganizeEvent] = useState(eventData);

  const asideLinks = [
    {
      linkText: "Dashboard",
      linkUrl: "/event-manager",
    },
    {
      linkText: "Events (Edit / Delete)",
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
    {
      linkText: "Logout",
      linkUrl: "/",
    },
  ];

  const eventAppsHeadData = {
    studentName: 'Student Name',
    fatherName: 'Father Name',
    studentEmail: 'Email Address',
    seatNo: 'Seat No',
    departName: 'Department',
    shift: 'Shift',
    eventName: 'Event Name'
  }

  const eventHeadData = {
    eName: 'Event Name',
    eDate: 'Event Date',
    eTime: 'Event Time',
    eVenue: 'Event Venue',
    shift: 'Shift',
    departName: 'Depart Name',
    eCost: 'Event Cost',
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
  }, [events]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setOrganizeEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(organizeEvent);
    
    try {
      const response = await postReq("/events/create-event", organizeEvent);
      console.log(response);
      
    } catch (error) {
      console.error("Error Posting event:", error);
    }
  };

  return (
    <div className={styles.ema}>
      <Dashboard title={"Event Management System"}>
        <div className={styles.emj}>
        <PageCom title={"Dr. Prof. Aejaz Khan"}>
          <div className={styles.emb}>
            <div className={styles.emc}>
              <aside>
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
              <div className={styles.emh}>
                <div className={styles.emf}>
                  <p>Directorate & Organizer of Event Management System</p>
                  <p>Office Joined by Mar 04, 2025</p>
                </div>

                <div className={styles.emi}>
                  <div className={styles.emg}>Img - 240x280</div>
                  <h3>Dr. Prof. Aejaz Khan</h3>
                </div>
              </div>

              <div id="events" className={styles.eme}>
                <h3>Events</h3>
                <div>
                  {events.length > 0 ? (
                    <Table headData={eventHeadData} rowData={events} />
                  ) : (
                    <p>Events Not Found!</p>
                  )}
                </div>
              </div>

              <div id="organiz-event" className={styles.eme}>
                <h3>Organize Event</h3>

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
                    </label><br /><br />
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
                    </label><br /><br />
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
                    </label><br /><br />
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
                        required
                        value={organizeEvent.costType}
                        onChange={handleChange}
                      />
                    </label><br /><br />
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
                    <div className={styles.emk}>
                      <button
                        type="button"
                        onClick={handleSubmit}
                      >
                        Event Post
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div id="event-applications" className={styles.eme}>
                <h3>Event Applications</h3>
                <div>
                  {eventApps.length > 0 ? (
                    <Table headData={eventAppsHeadData} rowData={eventApps} />
                  ) : (
                    <p>Event Applications Not Found!</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </PageCom>
        </div>
      </Dashboard>
    </div>
  );
};

export default EventDashboard;
