import { NavLink } from "react-router-dom";

const ButtonCom = ({ btnText, btnLink, btnLayout }) => {
  return (
    <div>
      <NavLink to={btnLink}>
        <button className={btnLayout}>{btnText}</button>
      </NavLink>
    </div>
  );
};

export default ButtonCom;
