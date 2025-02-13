import { useParams } from 'react-router';
import styles from './ErrorCom.module.css'

const ErrorCom = () => {
  const url = useParams();
  console.log(url);
  
  return (
    <div className={styles.eow}>
      <div className={styles.eiw}>
        <h2>404</h2>
        <h3>Page Not Found</h3>
        <p>This page <span>/{url['*']}</span> is under construction, Please try later.</p>
      </div>
    </div>
  );
};

export default ErrorCom;
