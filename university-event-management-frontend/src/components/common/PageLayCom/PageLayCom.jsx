import PageImgCom from "../PageImgCom/PageImgCom";
import PageCom from "../PageCom/PageCom";
import styles from "./PageLayCom.module.css";

const PageLayCom = ({ imgTitle }) => {
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
          <PageImgCom imgTitle={imgTitle} />
        </div>
        <PageCom />
      </div>
    </div>
  );
};

export default PageLayCom;
