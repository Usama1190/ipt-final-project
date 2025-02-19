import styles from './EventAppPage.module.css'
import PageLayCom from "../../components/common/PageLayCom/PageLayCom";

const EventAppPage = () => {
  return (
    <div className={styles.aneow}>
      <div className={styles.aneiw}>
        <PageLayCom title={'Application For Event'}>
          Hello Application for New Event!
        </PageLayCom>
      </div>
    </div>
  );
};

export default EventAppPage;
