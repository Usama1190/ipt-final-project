import { NavLink } from "react-router-dom";

const ButtonCom = ({ btnText, btnLink, btnLayout, callFun, disabled }) => {
  return (
    <div>
      <NavLink to={btnLink}>
        <button
          className={btnLayout}
          onClick={callFun}
          disabled={disabled || false}
        >
          {btnText}
        </button>
      </NavLink>
    </div>
  );
};

export default ButtonCom;
