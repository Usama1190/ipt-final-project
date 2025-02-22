import styles from "./PageConCom.module.css";

const PageConCom = ({ children, data }) => {
  return (
    <div className={styles.pcca}>
      <div className={styles.pccb}>
        <ul>
          {data?.map((item, index) => {
            return <li key={index}>
                <a href={item.linkUrl}>{item.linkText}</a>
            </li>;
          })}
        </ul>
      </div>
      <div className={styles.pccc}>{children}</div>
    </div>
  );
};

export default PageConCom;
