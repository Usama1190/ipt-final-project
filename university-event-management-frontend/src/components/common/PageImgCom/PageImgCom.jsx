import styles from "./PageImgCom.module.css";
import heroPageImg from "/assets/imgs/banner-blog.jpg";

const PageImgCom = ({ imgTitle }) => {
  return (
    <div>
      <div className={styles.hpicihw}>
        <img src={heroPageImg} className={styles.hpicbn} alt="Banner Image" />
        <div className={styles.hpichw}>
          <h2>{`${imgTitle || 'Hero Page Image Component'}`}</h2>
        </div>
        <div className={styles.hpicdw}>
          <h2>{`${imgTitle || 'Hero Page Image Component'}`}</h2>
        </div>
      </div>
    </div>
  );
};

export default PageImgCom;
