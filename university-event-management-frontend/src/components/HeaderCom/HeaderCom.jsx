import { NavLink } from "react-router-dom";
import navData from "../../utils/constant/navData";
import styles from "./Header.module.css";

const HeaderCom = () => {
  return (
    <div className={styles.oh}>
      <div className={styles.ih}>
        <div>
          <div className={styles.kul}>
            <img src={"./assets/imgs/uok-logo.png"} alt="" />
          </div>
        </div>

        <nav>
          <ul>
            {navData?.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item.linkUrl}>
                    {item.linkText}{" "}
                    {item.dropdown ? (
                      <span className={styles.ddi}>
                        <i className="fa-solid fa-caret-down"></i>
                      </span>
                    ) : null}
                    {item.newCategory ? <span className={styles.new}>new</span> : null}
                  </NavLink>
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
