import EventCom from "../../(Events)/EventCom/EventCom";
import styles from "./PageCom.module.css";

const PageCom = ({ data }) => {
  return (
    <div>
      <div className={styles.pa}>
        <div className={styles.pb}>
          <div className={styles.pba}>
            <h3>Main Page</h3>
          </div>
          <div className={styles.pbb}>
            <div className={styles.pbba}></div>
            <div className={styles.pbbb}></div>
            <div className={styles.pbbc}></div>
          </div>
        </div>

        <div className={styles.pc}>
          <div className={styles.pca}>
            <div>
              <ul>
                {data[0].navigate?.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.url}>{item.linkText}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className={styles.pcb}>
            <div>
              {data[0].title === "Karachi University Events" && <EventCom data={data} />}
            </div>

            <div>Hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCom;
