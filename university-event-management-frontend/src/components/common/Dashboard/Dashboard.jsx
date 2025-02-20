import HeadCom from "../HeadCom/HeadCom"
import styles from './Dashboard.module.css'

const Dashboard = ({ children , title}) => {
  return (
    <div className={styles.da}>
      <div className={styles.db}>
        <HeadCom title={title} />
        {children}
      </div>
    </div>
  )
}

export default Dashboard
