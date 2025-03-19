import { useEffect, useState } from "react";
import BioCom from "../../components/common/BioCom/BioCom";
import Dashboard from "../../components/common/Dashboard/Dashboard";
import PageCom from "../../components/common/PageCom/PageCom";
import styles from "./AdminDashboard.module.css";
import adminImg from "/assets/imgs/banner-joinus-dkmi.jpg";
import ClockCom from "../../components/common/ClockCom/ClockCom";

const AdminDashboard = () => {
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

  const adminData = {
    post: "Event Management System",
    name: "Dr. Prof. Aejaz Khan",
    imgUrl: adminImg,
    imgAlt: "Event Manager Image",
  };

  const [time, setTime] = useState(new Date());
  const hours = time.getHours() % 12 || 12; // 0 ko 12 banana
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const amPm = time.getHours() >= 12 ? "pm" : "am";

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // const data = [
  //   {
  //     title: "Admin Dashboard of University of Karachi",
  //     navigate: [
  //       {
  //         linkText: "Dashboard",
  //         linkUrl: "/karachi-university-admin-dashboard",
  //       },
  //       {
  //         linkText: "Admissions Management System",
  //         linkUrl: "#events-announce",
  //       },
  //       {
  //         linkText: "Faculties Management System",
  //         linkUrl: "#events-announce",
  //       },
  //       {
  //         linkText: "Examination Management System",
  //         linkUrl: "#events-announce",
  //       },
  //       {
  //         linkText: "Events Management System",
  //         linkUrl: "#events-announce",
  //       },
  //       {
  //         linkText: "Alumni Management System",
  //         linkUrl: "#events-announce",
  //       },
  //     ],
  //   },
  // ];
  return (
    <div className={styles.ema}>
      <Dashboard title={"Welcome back to the Admin Dashboard"}>
        <PageCom title={"Dr. Prof. Abdul Latif Khatri"}>
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
                <BioCom data={adminData}>
                  <div>
                    <p>Directorate & Organizer of Event Management System</p>
                    <p>Office Joined by Mar 04, 2025 to</p>

                    <div className={styles.emm}>
                    <ClockCom />
                    </div>

                    <div className={styles.eml}>
                      <div>
                        <h1>10</h1>
                        <h4>Recieved Applications</h4>
                      </div>
                      <div>
                        <h1>12</h1>
                        <h4>Ongoing Events</h4>
                      </div>
                      <div>
                        <h1>15</h1>
                        <h4>Approved Applications</h4>
                      </div>
                    </div>
                  </div>
                </BioCom>
              </div>
            </div>
          </div>
        </PageCom>
      </Dashboard>
    </div>
  );
};

export default AdminDashboard;
