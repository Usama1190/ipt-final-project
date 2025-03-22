import Dashboard from "../../components/common/Dashboard/Dashboard";
import ButtonCom from "../../components/common/ButtonCom/ButtonCom";
import ClockCom from "../../components/common/ClockCom/ClockCom";
import { departNames } from "../../utils/constant/departNames";
import PageCom from "../../components/common/PageCom/PageCom";
import BioCom from "../../components/common/BioCom/BioCom";
import adminImg from "/assets/imgs/banner-joinus-dkmi.jpg";
import styles from "./AdminDashboard.module.css";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [isHide, setIsHide] = useState(true);

  const asideLinks = [
    {
      linkText: "Administration Management",
      linkUrl: "/",
    },
    {
      linkText: "Examination Management",
      linkUrl: "/event-manager",
    },
    {
      linkText: "Feculty Management",
      linkUrl: "/event-manager#events",
    },
    {
      linkText: "Event Management",
      linkUrl: "/event-manager#organize-event",
    },
  ];

  const adminData = {
    post: "Event Management System",
    name: "Dr. Prof. Aejaz Khan",
    imgUrl: adminImg,
    imgAlt: "Event Manager Image",
  };

  const hideListDepart = () => {
    setIsHide(!isHide);
  }

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
                <div>
                  <ButtonCom btnText={"Logout"} btnLayout={"btn5"} />
                </div>
                <ul>
                  <li>
                    <h4>Admin Dashboard</h4>
                  </li>
                  <li>
                    <strong>Management Systems</strong>
                  </li>
                  <li>
                    <ul>
                      {asideLinks.map((item, index) => {
                        return (
                          <li key={index}>
                            <a href={item.linkUrl}>{item.linkText}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                  <li>
                    <strong>Department Systems</strong>
                  </li>
                  <li>
                    <ul>
                      {departNames.map((item, index) => {
                        return (
                          <div key={index}>
                            {index <= 4 && (
                              <li>
                                <a href={item}>{item}</a>
                              </li>
                            )}
                            {index === 4 && (
                              <ButtonCom
                                btnText={isHide ? "View more" : "View less"}
                                btnLayout={"btn4"}
                                callFun={hideListDepart}
                              />
                            )}
                            {index > 4 && (
                              <li className={isHide ? 'dn' : 'db'}>
                                <a href={item}>{item}</a>
                              </li>
                            )}
                          </div>
                        );
                      })}
                    </ul>
                  </li>
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
                        <h1>40+</h1>
                        <h4>Departments</h4>
                      </div>
                      <div>
                        <h1>48k+</h1>
                        <h4>Students</h4>
                      </div>
                      <div>
                        <h1>1.5k+</h1>
                        <h4>Faculty</h4>
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
