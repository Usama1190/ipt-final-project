import { NavLink } from "react-router-dom";
import navData from "../../utils/constant/navData";
import styles from "./Header.module.css";
import logo from "/assets/imgs/uok-logo.png";
import { contactNumber, socialData } from "../../utils/constant/socialData";

const HeaderCom = () => {
  return (
    <div className={styles.ha}>
      <div className={styles.hb}>
        <div className={styles.hc}>
          <div className={styles.hd}>
            <img src={logo} alt="uok logo" />
          </div>

          <div className={styles.he}>
            <div>
              <ul className={styles.hf}>
                {socialData.map((item, index) => {
                  const lastEle = socialData.length - 1;

                  return (
                    <li key={index}>
                      <NavLink to={item.url}>{item.name}</NavLink>
                      {lastEle == index ? null : <span>|</span>}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2 className={styles.hg}>Call: {contactNumber}</h2>
            </div>
            <div className={styles.hh}>
              <input
                type="text"
                className={styles.hi}
                placeholder="Enter text to search"
              />
              <button className={`active ${styles.hj}`}>Search</button>
            </div>
          </div>
        </div>

        <nav>
          <ul>
            {navData?.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item.linkUrl}>
                    {item.linkText}{" "}
                    {item.dropdown && (
                      <span className={styles.hk}>
                        <i className="fa-solid fa-caret-down"></i>
                      </span>
                    )}
                    {item.newCategory ? (
                      <span className={styles.hl}>new</span>
                    ) : null}
                  </NavLink>
                  <div className={`${styles.ddla} ${item.dropdown ? styles.db : styles.dn}`}>
                    {
                      item.innerLinkTextAndUrl?.map((item2, index2) => {
                        return (
                          <div key={index2}>
                            <a href={item2.linkUrl}>{item2.linkText}</a>
                          </div>
                        )
                      })
                    }
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderCom;
