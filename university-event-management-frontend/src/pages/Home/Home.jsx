import { useState } from 'react'
import styles from './Home.module.css'
import { departImages } from '../../utils/constant/departImages'

const Home = () => {
    const [count, setCounter] = useState(0);
    const img = departImages[count].imgUrl;
    
    const changeImg = () => {
        console.log(img);
    }

    changeImg();


    // setInterval(changeImg, 3000);

    

  return (
    <div className={styles.hma}>
      <div className={styles.hmb}>
        <div className={styles.hmc}>
            <div className={styles.hmd}>
                <img src={`${img}`} alt="department of administration image" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
