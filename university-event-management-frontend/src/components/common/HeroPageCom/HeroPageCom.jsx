import HeroPageImgCom from "../HeroPageImgCom/HeroPageImgCom";
import styles from "./HeroPageCom.module.css";

const HeroPageCom = ({ imgTitle }) => {
  return (
    <div className={styles.hpcow}>
      <div className={styles.hpciw}>
        <div className={styles.hpchlw}>
          <a href="/">Home</a>
          <span className={styles.hpcicw}>
            <i className="fa-sharp fa-solid fa-play"></i>
          </span>
          <a href="/">Main page</a>
        </div>
        <div className={styles.hpchiw}>
            <HeroPageImgCom imgTitle={imgTitle} />
        </div>

        <div className={styles.hpccow}>
          <div className={styles.hpcciw}>
            <div className={styles.hpccidw}>
              <div className={styles.hpccidow}></div>
              <div className={styles.hpccidtw}></div>
              <div className={styles.hpccidhw}></div>
            </div>
          </div>

          <div className={styles.tw}>
            <h3>Main Page</h3>
          </div>
          <div className={styles.do}>
            <div className={styles.loc}></div>
            <div className={styles.poc}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPageCom;
