import logoUok from '/assets/imgs/uok-logo.png'
import styles from './HeadCom.module.css'

const HeadCom = ({ title }) => {
  return (
    <div>
      <div className={styles.dha}>
        <div>
            <img src={logoUok} alt="logo uok" />
        </div>
        <div>
            <h1>{title || 'Dashboard'}</h1>
        </div>
      </div>
    </div>
  )
}

export default HeadCom
