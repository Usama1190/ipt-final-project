import styles from "./MessCom.module.css";

const MessCom = ({ message, warnLayout }) => {
  return (
    <div className={`${styles.wna} ${warnLayout ? styles.wna : styles.wnb}`}>
      <small>{message}</small>
    </div>
  );
};

export default MessCom;
