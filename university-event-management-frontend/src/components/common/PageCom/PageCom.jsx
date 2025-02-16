import styles from './PageCom.module.css'

const PageCom = () => {

  return (
    <div>
      <div className={styles.pa}>
          <div className={styles.pb}>
            <div className={styles.pba}>
                <h3>Main Page</h3>
            </div>
            <div className={styles.pbb}>
              <div className={styles.pbba}></div>
              <div className={styles.pbbb}></div>
              <div className={styles.pbbc}></div>
            </div>
          </div>

          <div className={styles.pc}>
            <div className={styles.pca}>
                <div>
                    <ul>
                        
                    </ul>
                </div>
            </div>
            <div className={styles.pcb}>
              Hello Contents
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ad incidunt sapiente! Iure minima nostrum blanditiis mollitia voluptates ab reprehenderit, distinctio sed provident impedit doloribus nemo cupiditate maiores nulla non!</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PageCom
