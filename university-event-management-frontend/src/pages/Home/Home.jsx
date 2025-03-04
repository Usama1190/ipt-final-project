import ButtonCom from "../../components/common/ButtonCom/ButtonCom";
import { departImages } from "../../utils/constant/departImages";
import { departNames } from "../../utils/constant/departNames";
import CardCom from "../../components/common/CardCom/CardCom";
import PageCom from "../../components/common/PageCom/PageCom";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [id, setId] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setId((prevIndex) => (prevIndex + 1) % departImages.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    title1: "Latest News",
    title2: "Latest Results",
    arrayOne: [
      {
        title: "MBBS Annual Examination 2024",
        link: "Final",
        text: "Modular",
        date: "(18FEB2025)",
      },
      {
        title: "MBBS Annual Examination 2024",
        link: "III PRO",
        text: "Modular",
        date: "(04DEC2024)",
      },
      {
        title: "B.D.S Examination 2024",
        link: "I-PRO(Supply)",
        link2: "III-PRO(Annual)",
        date: "(04DEC2024)",
      },
    ],
    arrayTwo: [
      {
        title: "Schedule of Postponed Papers",
        link: "Notification",
        date: "(17FEB2025)",
      },
      {
        title: "Submission of Enrolment Form",
        link: "Associate Degree Program",
        date: "(10FEB2025)",
      },
      {
        title: "Examination Schedule 2023-24",
        link: "Click here",
        date: "(10JAN2024)",
      },
    ],
  };

  return (
    <div className={styles.hma}>
      <div className={styles.hmb}>
        <div className={styles.hmc}>
          <div className={styles.hmd} style={{ opacity: fade ? 1 : 0 }}>
            <img
              src={`${departImages[id].imgUrl}`}
              alt="department of administration image"
            />
          </div>

          <div className={styles.hme}>
            <div>
              <a href="#alumni-registration">Alumni registration</a>,{" "}
              <a href="#official-students'-societies">
                Official Students&apos; Societies
              </a>
              , <a href="#view-uoK's-profile">View UoK&apos;s profile</a>
            </div>
            <div>
              <ButtonCom
                btnLayout={"btn2"}
                btnText={"Student Portal"}
                btnLink={"/account/login"}
              />
            </div>
          </div>

          <div className={styles.hmf}>
            <h3>Latest ➡</h3>
            <a href="#semester-fee">Semester Fee</a>
            {" | "}
            <a href="#annual-report-on-students-societies-2023-24">
              Annual Report on Students Societies 2023-24
            </a>
          </div>

          <div className={styles.hmg}>
            <h3>Welcome</h3>
            <p>
              At the time of creation of Pakistan as a sovereign state in 1947,
              means for higher education and research were negligible.
              Responding to the impending requirement the University of Karachi
              was established in 1951 :: <a href="#read-more">Read More</a>
            </p>
          </div>

          <div className={styles.hmh}>
            <div className={styles.hmi}>
              <img
                src="./assets/imgs/banner-joinus-dkmi.jpg"
                alt="vc of uok image"
              />
            </div>

            <div className={styles.hmk}>
              <div className={styles.hmm}>
                <PageCom title={"Departments"}>
                  <div>
                    <p>Jump to department (A-Z)</p>
                    <select name="" id="">
                      {departNames.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                    <button>Go / Search</button>
                  </div>
                </PageCom>
              </div>

              <div>
                <PageCom title={"Scholarships"}>
                  <div className={styles.hml}>
                    <a href="#student-finance-aid-office">
                      Student Finance Aid Office
                    </a>
                    <p>
                      Interviews Schedule for Sindh HEC Indigenous Scholarship
                      for M.Phil. / Ph.D. Students 2024-25 ::{" "}
                      <a href="#click-here">Click here</a>
                    </p>
                  </div>
                </PageCom>
              </div>
            </div>

            <div className={styles.hmj}>
              <CardCom data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
