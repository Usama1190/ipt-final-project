import Dashboard from "../../components/common/Dashboard/Dashboard"
import PageCom from "../../components/common/PageCom/PageCom"
import styles from './Students.module.css'

const StudentDashboard = () => {
  return (
    <div className={styles.ema}>
      <Dashboard title={"Student Dashboard"}>
        <PageCom title={"Muhammad Hunain"}>
          <div className={styles.emb}>
            <div className={styles.emc}>
              <aside>
                <h3>Dashboard</h3>
              </aside>
            </div>

            <div className={styles.emd}>
              <div>
                Main Content
                </div>
            </div>
          </div>
        </PageCom>
      </Dashboard>
    </div>
  )
}

export default StudentDashboard
