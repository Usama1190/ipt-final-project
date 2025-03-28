import PageConCom from "../../components/common/PageConCom/PageConCom";
import PageLayCom from "../../components/common/PageLayCom/PageLayCom";
import EventCom from "../../components/Events/EventCom/EventCom";
import { getReq, postReq } from "../../api/axios";
import { useEffect, useState } from "react";
import styles from "./Events.module.css";
import ButtonCom from "../../components/common/ButtonCom/ButtonCom";
import MessCom from "../../components/common/MessCom/MessCom";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [students, setStudents] = useState([]);
  const [appBtnDisabled, setAppBtnDisabled] = useState(true);
  const [eventLoader, setEventLoader] = useState(false);
  const [btnLoader, setBtnLoader] = useState(false);
  const [isFindCandidate, setIsFindCandidate] = useState(true)

  const userData = {
    studentEmail: "",
    seatNo: "",
    eventName: "",
  };

  console.log(students);

  const [userInput, setUserInput] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (userInput.studentEmail.length > 4 && userInput.seatNo.length === 8) {
      setAppBtnDisabled(false);
    } else {
      setAppBtnDisabled(true);
    }
  };

  const handleSubmit = async () => {
    try {
      setBtnLoader(true);
      const findAndGetUserData = students.filter(
        (item) => item.studentEmail === userInput.studentEmail
      );
      const [getStudent] = findAndGetUserData;
      console.log(getStudent);

      if (getStudent === undefined) {
        setIsFindCandidate(false);
        setBtnLoader(false);
      } else {
        const response = await postReq("/eventapps/create-eventapp", userInput);
        console.log(response);
        setBtnLoader(false);
        setIsFindCandidate(true);
        setUserInput({ studentEmail: '', seatNo: '', eventName: ''})
      }
    } catch (error) {
      setBtnLoader(false);
      setIsFindCandidate(true);
      console.error("Error Posting event app: line no 59 ", error);
    }
  };

  const data = [
    {
      linkText: "Introduction",
      linkUrl: "/events",
    },
    {
      linkText: "Latest Events",
      linkUrl: "/events#latest-events",
    },
    {
      linkText: "Application for Event",
      linkUrl: "/events#application-event",
    },
  ];

  const titles = {
    imgTitle: "Karachi University Events",
    pageTitle: "Events Page",
  };

  useEffect(() => {
    const fetchEvents = async () => {
      setEventLoader(true);
      try {
        const response = await getReq("/events");
        setEvents(response.data.data);
        setEventLoader(false);
      } catch (error) {
        setEventLoader(false);
        console.error("Error fetching events: line no 92", error);
      }
    };
    fetchEvents();

    const fetchStudents = async () => {
      try {
        const response = await getReq("/students");
        setStudents(response.data.data);
      } catch (error) {
        console.error("Error fetching students: line no 102", error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <PageLayCom titles={titles}>
        <PageConCom data={data}>
          <div className={styles.ela}>
            <h3>Dr. Prof. Aejaz Khan</h3>
            <p>Incharge, Directorate of Events</p>
            <p>
              Send Application, for an Exciting Events ::
              <a href="#application-event">Click here</a>
            </p>
          </div>

          <div id="latest-events" className={styles.elb}>
            <h3>Latest Events</h3>
            {eventLoader ? (
              <div>
                <span className="loader"></span>
              </div>
            ) : (
              <div>
                {events.length > 0 ? (
                  events?.map((item, index) => {
                    return (
                      <div key={index} className={styles.eld}>
                        <EventCom data={item} />
                      </div>
                    );
                  })
                ) : (
                  <div>
                    <MessCom message={"Events not found!"} />
                  </div>
                )}
              </div>
            )}
          </div>

          <div id="application-event">
            <h3>Application For Event</h3>
            <br />
            <div>
              <p>
                <strong>Note :</strong> Only <strong>Active</strong> students
                can fill out the form.
              </p>
              <div className={isFindCandidate ? 'dn' : 'db'}>
                <MessCom
                  warnLayout
                  message={`Candidate not found!`}
                /><br />
                <div>
                <small>Please first create an account::<a href="/account/sign-up">Click here</a></small>
                </div>
              </div>
              <form>
                <label htmlFor="studentEmail">
                  Email :{" "}
                  <input
                    type="email"
                    name="studentEmail"
                    id="studentEmail"
                    placeholder="johndoe@gmail.com"
                    required
                    value={userInput.studentEmail}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="seatNo">
                  Seat No :{" "}
                  <input
                    type="text"
                    name="seatNo"
                    id="seatNo"
                    placeholder="10101010"
                    maxLength={8}
                    required
                    value={userInput.seatNo}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="eventName">
                  Event Name :{" "}
                  <input
                    type="text"
                    name="eventName"
                    id="eventName"
                    placeholder="Sport"
                    required
                    value={userInput.eventName}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <br />
                <div>
                  {!btnLoader ? (
                    <ButtonCom
                      btnText={"Send"}
                      btnLayout={"btn3"}
                      callFun={handleSubmit}
                      disabled={appBtnDisabled}
                    />
                  ) : (
                    <div>
                      <span className="loader"></span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </PageConCom>
      </PageLayCom>
    </div>
  );
};

export default Events;
