import styles from './BioCom.module.css'

const BioCom = ({ children, data }) => {
    const {imgUrl, imgAlt, name} = data;
  return (
    <div className={styles.bca}>
      <div className={styles.bcb}>
        {children}
      </div>

      <div className={styles.bcc}>
        <div>
            <img src={imgUrl} alt={imgAlt} />
        </div>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default BioCom;
