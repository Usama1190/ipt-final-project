import { NavLink } from "react-router-dom";
import { footerData, footerData2 } from "../../utils/constant/footerData";
import styles from "./FooterCom.module.css";

const FooterCom = () => {
  return (
    <div className={styles.fa}>
      <div className={styles.fb}>
        <div>
          <img src="./assets/imgs/footerend-uok.png" alt="footer image uok" />
        </div>

        <div className={styles.fc}>
          {footerData.map((item, index) => {
            return (
              <div key={index}>
                {item.title && <h2>{item.title}</h2>}
                <ul>
                  {item.linksAndTexts &&
                    item?.linksAndTexts.map((item, index) => {
                      return (
                        <li key={index}>
                          <span className={styles.fe}>
                            <i className="fa-sharp fa-solid fa-play"></i>
                          </span>
                          <NavLink to={item.link}>{item.text}</NavLink>
                        </li>
                      );
                    })}
                </ul>
                {item.inquiry && (
                  <div>
                    <p>
                      <span>
                        Inquiry Direct: <span>{item.inquiry}</span>
                      </span>
                      <span>
                        Ext: <span>{item.ext}</span>
                      </span>
                    </p>

                    <p>
                      <span>
                        Fax: <span>{item.fax}</span>
                      </span>
                    </p>

                    <p>
                      <span>
                        {" "}
                        Email:{" "}
                        <span>
                          <a href=".email" className={styles.ff}>{item.email.email}</a>
                        </span>
                      </span>
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.fd}>
          <div>
            <p>
              <span>
                <i className="fa-regular fa-copyright"></i>
              </span>{" "}
              2011 University of Karachi
            </p>
            <p>
              Use <a href="/" className={styles.an}>IE-8</a> or <a href="/" className={styles.an}>above</a>
            </p>
          </div>
          <div>
            <ul className={styles.fg}>
              {footerData2.map((item, index) => {
                const lastEle = footerData2.length - 1;
                return (
                  <li key={index}>
                    <a href={item.link}>{item.text}</a>
                    {lastEle == index ? null : <span>|</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCom;
