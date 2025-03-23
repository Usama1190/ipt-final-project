import Dashboard from "../../components/common/Dashboard/Dashboard";
import ButtonCom from "../../components/common/ButtonCom/ButtonCom";
import ClockCom from "../../components/common/ClockCom/ClockCom";
import { departNames } from "../../utils/constant/departNames";
import PageCom from "../../components/common/PageCom/PageCom";
import BioCom from "../../components/common/BioCom/BioCom";
import adminImg from "/assets/imgs/banner-joinus-dkmi.jpg";
import styles from "./AdminDashboard.module.css";
import { useEffect, useState } from "react";
import { getReq } from "../../api/axios";
import Table from "../../components/common/Table/Table";

const AdminDashboard = () => {
  const [isHide, setIsHide] = useState(true);
  const [manageLinksHide, setManageLinksHide] = useState(true);
  const [isLoader, setIsLoader] = useState(false);
  const [students, setStudents] = useState(null);

  const studentHeadData = {
    studentName: "Candidate Name",
    fatherName: "Father Name",
    studentEmail: "Candidate Email",
    departName: "Depart Name",
    seatNo: "Seat No.",
    shift: "Shift",
    createdAt: "Account build",
  };

  const asideLinks = [
    {
      linkText: "Administration Management",
      linkUrl: "#administration-management",
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

  useEffect(() => {
    setIsLoader(true);
    const fetchStudents = async () => {
      try {
        const response = await getReq("/students");
        setStudents(response.data.data);
        setIsLoader(false);
      } catch (error) {
        setIsLoader(false);

        console.error("Error fetching students: line no 102", error);
      }
    };
    fetchStudents();
  }, []);

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
                          <div key={index}>
                            {index <= 3 && (
                              <li>
                                <a href={item.linkUrl}>{item.linkText}</a>
                              </li>
                            )}
                            {index === 3 && (
                              <div className={styles.ada}>
                                <ButtonCom
                                btnText={manageLinksHide ? "View more" : "View less"}
                                btnLayout={"btn4"}
                                callFun={() => setManageLinksHide(!manageLinksHide)}
                              />
                              </div>
                            )}
                            {index > 3 && (
                              <li className={manageLinksHide ? "dn" : "db"}>
                                <a href={item.linkUrl}>{item.linkText}</a>
                              </li>
                            )}
                          </div>
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
                        if (index === 0) return null;

                        return (
                          <div key={index}>
                            {index <= 4 && (
                              <li>
                                <a href={item}>{item}</a>
                              </li>
                            )}
                            {index === 4 && (
                              <div className={styles.ada}>
                                <ButtonCom
                                btnText={isHide ? "View more" : "View less"}
                                btnLayout={"btn4"}
                                callFun={() => setIsHide(!isHide)}
                              />
                              </div>
                            )}
                            {index > 4 && (
                              <li className={isHide ? "dn" : "db"}>
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
                    <p>Vice Chancellor of University of Karachi (Uok)</p>
                    <p>Office Joined from Mar 04, 2025 to</p>

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

              <div id="administration-management" className={styles.emh}>
                <h3>Administration Management</h3>
                <br />
                <h4>Candidate&apos;s Account</h4>
                <br />
                {isLoader ? (
                  <span className="loader"></span>
                ) : (
                  <div>
                    {students?.length > 0 ? (
                      <Table
                        headData={studentHeadData}
                        rowData={students}
                        // fetchEvents={fetchEvents}
                      />
                    ) : (
                      <p>Events Not Found!</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </PageCom>
      </Dashboard>
    </div>
  );
};

export default AdminDashboard;
