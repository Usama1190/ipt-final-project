import styles from "./Admissions.module.css";
import PageLayCom from "../../components/common/PageLayCom/PageLayCom";

const Admissions = () => {
  return (
    <div>
      <PageLayCom title={"Admissions Page"}>
        <div className={styles.ada}>
          <div className={styles.adb}>
            <aside>
              <ul>
                <li>
                  <a href="#admission-program-2025">Admission Program 2025</a>
                </li>
                <li>
                  <a href="#phil-phd-ms-md">M.Phil / Ph.D. & M.S. / M.D.</a>
                </li>
                <li>
                  <a href="#international-students">International Students</a>
                </li>
                <li>
                  <a href="#contact-us">Contact us</a>
                </li>
              </ul>
            </aside>
          </div>

          <div className={styles.adc}>
            <div>
              <h3>Dr. Saima Akhter</h3>
              <p>Incharge, Directorate of Admissions</p>
              <p>Emails: <a href="#">admissions.uok.edu.pk</a></p>
            </div>

            <div>
              <img src="/assets/imgs/oap.jpg" alt="Admissions image guide" />
            </div>

            <div>
              <img src="/assets/imgs/seafs.jpg" alt="Admissions image guide" />
            </div>
          </div>
        </div>
      </PageLayCom>
    </div>
  );
};

export default Admissions;
