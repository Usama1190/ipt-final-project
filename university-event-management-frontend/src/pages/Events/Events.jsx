import { useEffect, useState } from "react";
import PageConCom from "../../components/common/PageConCom/PageConCom";
import PageLayCom from "../../components/common/PageLayCom/PageLayCom";
import { getReq } from "../../api/axios";
import EventCom from "../../components/(Events)/EventCom/EventCom";
import styles from "./Events.module.css";
import ButtonCom from "../../components/common/ButtonCom/ButtonCom";

const Events = () => {
  // const eventData = [
  //   {
  //     id: 1,
  //     depart: "UBIT",
  //     note: "Last date for passes purchasing, Feb 25, 25.",
  //     timing: "09:00am - 04:00pm sharp",
  //     date: "Feb 27, 25 (Monday)",
  //     venue: "Jubillee Circket Ground (University of Karchi)",
  //     type: "Sport",
  //     cost: "RS.249/-",
  //     costType: "Not-Refundable",
  //     noteCost: "After due date Generate Pass are disabled.",
  //     due: "Feb 25, 25",
  //   },
  // ];

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

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getReq("/events");
        setEvents(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  console.log(events);

  return (
    <div>
      <PageLayCom titles={titles}>
        <PageConCom data={data}>
          <div className={styles.ela}>
            <h3>Dr. Saima Akhter</h3>
            <p>Incharge, Directorate of Events</p>
            <p>Send Application, for Exciting Events</p>
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

          <div id="application-event" className={styles.elf}>
            <h3>Application For Event</h3>
            
            <div>
              <form action="">
                <label htmlFor="name">
                  Name : <input type="text" name="name" id="name" placeholder="John" />
                </label>

                <label htmlFor="fname">
                  Father Name : <input type="text" name="fname" id="fname" placeholder="Deo" />
                </label><br /><br />

                <label htmlFor="email">
                  Email : <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" />
                </label>

                <label htmlFor="dname">
                  Department Name : <input type="text" name="dname" id="dname" placeholder="Mass Com" />
                </label><br /><br />

                <label htmlFor="snumber">
                  Seat No : <input type="text" name="snumber" id="snumber" placeholder="20101010" />
                </label>

                Shift : {' '}
                  <input type="radio" name="morning" id="morning" /> {' '}
                <label htmlFor="morning">
                Morning
                </label>

                <input type="radio" name="morning" id="evening" /> {' '}
                <label htmlFor="evening">
                Evening
                </label><br /><br />

                <label htmlFor="ename">
                  Event Name : <input type="text" name="ename" id="ename" placeholder="Sport" />
                </label>

                <ButtonCom btnText={'Submit'} btnLink={'#submit'} btnLayout={'btn2'} />
              </form>
            </div>
          </div>
        </PageConCom>
      </PageLayCom>
    </div>
  );
};

export default Events;
