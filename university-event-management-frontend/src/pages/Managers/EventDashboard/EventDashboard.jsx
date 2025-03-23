import Dashboard from "../../../components/common/Dashboard/Dashboard";
import ButtonCom from "../../../components/common/ButtonCom/ButtonCom";
import ClockCom from "../../../components/common/ClockCom/ClockCom";
import { departNames } from "../../../utils/constant/departNames";
import PageCom from "../../../components/common/PageCom/PageCom";
import MessCom from "../../../components/common/MessCom/MessCom";
import BioCom from "../../../components/common/BioCom/BioCom";
import managerImg from "/assets/imgs/banner-joinus-dkmi.jpg";
import Table from "../../../components/common/Table/Table";
import { getReq, postReq } from "../../../api/axios";
import styles from "./EventDashboard.module.css";
import { useEffect, useState } from "react";

const EventDashboard = () => {
  const [events, setEvents] = useState([]);
  const [eventApps, setEventApps] = useState([]);
  const [isWarning, setIsWarning] = useState(false);
  const [eventLoader, setEventLoader] = useState(false);
  const [eventAppLoader, setEventAppLoader] = useState(false);
  const [organizeBtnDisabled, setOrganizeBtnDisabled] = useState(true);

  const eventData = {
    departName: "",
    eName: "",
    shift: "",
    eDate: "",
    eTime: "",
    eVenue: "",
    eCost: 0,
    costType: "",
    officialAnnounce: "",
  };

  const [organizeEvent, setOrganizeEvent] = useState(eventData);

  const managerData = {
    post: "Event Management System",
    name: "Dr. Prof. Aejaz Khan",
    imgUrl: managerImg,
    imgAlt: "Event Manager Image",
  };

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
  ];

  const eventAppsHeadData = {
    studentName: "Student Name",
    fatherName: "Father Name",
    studentEmail: "Email Address",
    seatNo: "Seat No",
    departName: "Department",
    shift: "Shift",
    eventName: "Event Name",
    createdAt: "App Date",
  };

  const eventHeadData = {
    eName: "Event Name",
    eDate: "Event Date",
    eTime: "Event Time",
    eVenue: "Event Venue",
    shift: "Shift",
    departName: "Depart Name",
    eCost: "Event Cost",
    costType: "Cost Type",
    createdAt: "Event Annouce",
  };

  const fetchEvents = async () => {
    setEventLoader(true);
    try {
      const response = await getReq("/events");
      setEvents(response.data.data);
      setEventLoader(false);
    } catch (error) {
      setEventLoader(false);
      console.error("Error fetching events: event manager line no 91", error);
    }
  };

  const fetchEventApps = async () => {
    setEventAppLoader(true);
    try {
      const getAllEventApps = await getReq("/eventapps");
      setEventApps(getAllEventApps.data.data);
      setEventAppLoader(false);
    } catch (error) {
      setEventAppLoader(false);
      console.log(
        "Fetching event applications: event manager line no 104: ",
        error
      );
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchEventApps();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setOrganizeEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (
      organizeEvent.departName.length > 2 &&
      organizeEvent.costType.length > 3 &&
      organizeEvent.eDate.length > 0 &&
      organizeEvent.eName.length > 3 &&
      organizeEvent.eTime.length > 3 &&
      organizeEvent.eVenue.length > 2
    ) {
      setOrganizeBtnDisabled(false);
    } else {
      setOrganizeBtnDisabled(true);
    }
  };

  const handleSubmit = async () => {
    console.log(organizeEvent);

    const eventExits = events.filter(
      (item) => item.departName === organizeEvent.departName
    );

    console.log(eventExits, "eventExits");

    try {
      if (eventExits.length > 0) {
        setIsWarning(true);
      } else {
        const response = await postReq("/events/create-event", organizeEvent);
        console.log(response);
        fetchEvents();
        setIsWarning(false);
        setOrganizeEvent({
          departName: '',
          costType: '',
          eDate: '',
          eName: '',
          eTime: '',
          eVenue: '',
          shift: '',
          eCost: 0
        })
      }
    } catch (error) {
      console.error("Error Posting event:", error);
    }
  };

  return (
    <div className={styles.ema}>
      <Dashboard title={managerData.post}>
          <PageCom title={managerData.name}>
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
                    <li>
                      <ButtonCom btnText={'Logout'} btnLayout={'btn5'} />
                    </li>
                  </ul>
                </aside>
              </div>

              <div className={styles.emd}>
                <div className={styles.emh}>
                  <BioCom data={managerData}>
                    <div>
                      <p>Directorate & Organizer of Event Management System</p>
                      <p>Office Joined by Mar 04, 2025 to</p>

                      <div>
                        <ClockCom />
                      </div>

                      <div className={styles.eml}>
                        <div>
                          <h1>{eventApps.length}+</h1>
                          <h4>Recieved Applications</h4>
                        </div>
                        <div>
                          <h1>{events.length}</h1>
                          <h4>Ongoing Events</h4>
                        </div>
                        <div>
                          <h1>{events.length + 1}%</h1>
                          <h4>Approved Applications</h4>
                        </div>
                      </div>
                    </div>
                  </BioCom>
                </div>

                <div id="events" className={styles.eme}>
                  <h3>Events</h3>
                  {eventLoader ? (
                    <span className="loader"></span>
                  ) : (
                    <div>
                      {events.length > 0 ? (
                        <Table
                          headData={eventHeadData}
                          rowData={events}
                          fetchEvents={fetchEvents}
                        />
                      ) : (
                        <div><MessCom message={'Events Not Found!'} /></div>
                      )}
                    </div>
                  )}
                </div>

                <div id="organiz-event" className={styles.eme}>
                  <h3>Organize Event</h3>
                  <div>
                    <form>
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
                      <br />
                      <br />
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
                      <br />
                      <br />
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
                      <br />
                      <br />
                      Cost Type :{" "}
                      <label htmlFor="refundable">
                        <input
                          type="radio"
                          name="costType"
                          id="refundable"
                          value="Refundable"
                          checked={organizeEvent.costType === "Refundable"}
                          onChange={handleChange}
                        />{" "}
                        Refundable
                      </label>
                      <label htmlFor="notRefundable">
                        <input
                          type="radio"
                          name="costType"
                          id="notRefundable"
                          value="Not Refundable"
                          checked={organizeEvent.costType === "Not Refundable"}
                          onChange={handleChange}
                        />{" "}
                        Not Refundable
                      </label>
                      <label htmlFor="free">
                        <input
                          type="radio"
                          name="costType"
                          id="free"
                          value="Free"
                          checked={organizeEvent.costType === "Free"}
                          onChange={handleChange}
                        />{" "}
                        Free
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
                      <br />
                      <br />
                      {isWarning && (
                        <p>
                          <small>
                            Event are already exits at this department.
                          </small>
                        </p>
                      )}
                      <div className={styles.emk}>
                        <ButtonCom
                          btnText={"Event Post"}
                          btnLayout={"btn3"}
                          callFun={handleSubmit}
                          disabled={organizeBtnDisabled}
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div id="event-applications" className={styles.eme}>
                  <h3>Event Applications</h3>
                  <div>
                  {eventAppLoader ? (
                    <span className="loader"></span>
                  ) : (
                    <div>
                      {eventApps.length > 0 ? (
                        <Table
                          headData={eventAppsHeadData}
                          rowData={eventApps}
                          fetchEventApps={fetchEventApps}
                        />
                      ) : (
                        <div><MessCom message={'Event Applications Not Found!'} /></div>
                      )}
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
