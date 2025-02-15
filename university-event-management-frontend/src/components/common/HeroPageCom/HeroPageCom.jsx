import HeroPageImgCom from "../HeroPageImgCom/HeroPageImgCom";
import PageCom from "../PageCom/PageCom";
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
        <PageCom />
      </div>
    </div>
  );
};

export default HeroPageCom;
