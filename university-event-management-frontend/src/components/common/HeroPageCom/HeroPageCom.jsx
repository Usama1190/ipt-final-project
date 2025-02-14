import HeroPageImgCom from "../HeroPageImgCom/HeroPageImgCom";
import styles from "./HeroPageCom.module.css";

const HeroPageCom = () => {
  return (
    <div className={styles.hpcow}>
      <div className={styles.hpciw}>
        <div>
          <a href="/">Home</a>
          <span>
            <i className="fa-sharp fa-solid fa-play"></i>
          </span>
          <a href="/">Main page</a>
        </div>
        <div>
            <HeroPageImgCom imgTitle={'Usama Israr Khan'} />
        </div>
        HeroPageCom
      </div>
    </div>
  );
};

export default HeroPageCom;
