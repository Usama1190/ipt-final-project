import { NavLink } from "react-router-dom";

const ButtonCom = ({ btnText, btnLink, btnLayout, callFun }) => {
  return (
    <div>
      <NavLink to={btnLink}>
        <button className={btnLayout} onClick={callFun}>{btnText}</button>
      </NavLink>
    </div>
  );
};

export default ButtonCom;
