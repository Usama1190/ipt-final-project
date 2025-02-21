import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { departImages } from "../../utils/constant/departImages";
import CardCom from "../../components/common/CardCom/CardCom";
import PageCom from "../../components/common/PageCom/PageCom";
import { departNames } from "../../utils/constant/departNames";

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
            <a href="#alumni-registration">Alumni registration</a>,{" "}
            <a href="#official-students'-societies">
              Official Students&apos; Societies
            </a>
            , <a href="#view-uoK's-profile">View UoK&apos;s profile</a>
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
              <img src="./assets/imgs/banner-joinus-dkmi.jpg" alt="vc of uok image" />
            </div>

            <div className={styles.hmk}>
              <PageCom title={'Departments'}>
                <div>
                  <p>Jump to department (A-Z)</p>
                  <select name="" id="">
                    {
                      departNames.map((item, index) => {
                        return (
                          <option key={index} value={item}>{item}</option>
                        )
                      })
                    }
                  </select>
                  <button>Go search</button>
                </div>
              </PageCom>
              <PageCom title={'Scholarships'}>Hello I am Page Com</PageCom>
            </div>

            <div className={styles.hmj}>
              <CardCom>Hello Card</CardCom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
