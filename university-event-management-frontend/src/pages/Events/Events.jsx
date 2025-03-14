import PageConCom from "../../components/common/PageConCom/PageConCom";
import PageLayCom from "../../components/common/PageLayCom/PageLayCom";
import EventCom from "../../components/Events/EventCom/EventCom";
import { departNames } from "../../utils/constant/departNames";
import { getReq, postReq } from "../../api/axios";
import { useEffect, useState } from "react";
import styles from "./Events.module.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [students, setStudents] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const userData = {
    studentName: '',
    fatherName: '',
    studentEmail: '',
    departName: '',
    seatNo: '',
    shift: '',
    eventName: '',
  };

  const [userInput, setUserInput] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
      try {
        const userEmail = students.filter((item) => item.studentEmail === userInput.studentEmail);
        console.log(userEmail);
        
        const response = await postReq("/eventapps/create-eventapp", userInput);
        console.log(response);
        alert('Submit Application');
        setIsSubmit(true);
      } catch (error) {
        console.error("Error Posting event app:", error);
      }
      setIsSubmit(false);
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
      try {
        const response = await getReq("/events");
        setEvents(response.data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();

    const fetchStudents = async () => {
      try {
        const response = await getReq("/students");
        setStudents(response.data.data);
        console.log(students);
        
      } catch (error) {
        console.error("Error fetching events:", error);
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

          <div id="application-event">
            <h3>Application For Event</h3><br />
            <div>
              <p><strong>Note :</strong> Only <strong>Active</strong>{' '}
                students can fill the form.
              </p>
              <form>
                <label htmlFor="studentName">
                  Name :{" "}
                  <input
                    type="text"
                    name="studentName"
                    id="studentName"
                    placeholder="John"
                    required
                    value={userInput.studentName}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="fatherName">
                  Father Name :{" "}
                  <input
                    type="text"
                    name="fatherName"
                    id="fatherName"
                    placeholder="Deo"
                    required
                    value={userInput.fatherName}
                    onChange={handleChange}
                  />
                </label><br /><br />
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
                <label htmlFor="departName">
                  Department Name :{" "}
                  <select
                    name="departName"
                    id="departName"
                    required
                    value={userInput.departName}
                    onChange={handleChange}
                  >
                    <option value="">Select Department</option>
                    {departNames.map((item, index) => {
                      return (
                        <option key={index}>{item}</option>
                      );
                    })}
                  </select>
                </label><br /><br />
                <label htmlFor="seatNo">
                  Seat No :{" "}
                  <input
                    type="text"
                    name="seatNo"
                    id="seatNo"
                    placeholder="20101010"
                    min={8}
                    required
                    value={userInput.seatNo}
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
                  checked={userInput.shift === "Morning"}
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
                  checked={userInput.shift === "Evening"}
                  onChange={handleChange}
                />{" "}
                Evening
                </label>
                
                <br /><br />
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
                </label><br /><br />
                <div className={styles.elg}>
                  <button disabled={isSubmit} type="button" onClick={handleSubmit}>
                    Submit
                  </button>
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
