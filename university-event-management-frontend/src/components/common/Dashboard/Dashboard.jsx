import HeadCom from "../HeadCom/HeadCom"
import styles from './Dashboard.module.css'

const Dashboard = ({ children , title}) => {
  return (
    <div className={styles.dhba}>
      <div className={styles.dhbb}>
        <HeadCom title={title} />
        <div className={styles.dhbc}>
        {children}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
