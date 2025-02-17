import PageImgCom from "../PageImgCom/PageImgCom";
import PageCom from "../PageCom/PageCom";
import styles from "./PageLayCom.module.css";

const PageLayCom = ({ data }) => {
  return (
    <div className={styles.pa}>
      <div className={styles.pb}>
        <div className={styles.pc}>
          <a href="/">Home</a>
          <span className={styles.pe}>
            <i className="fa-sharp fa-solid fa-play"></i>
          </span>
          <a href="/">Main page</a>
        </div>
        <div className={styles.pd}>
          <PageImgCom imgTitle={data[0].title} />
        </div>
        <PageCom data={data} />
      </div>
    </div>
  );
};

export default PageLayCom;
