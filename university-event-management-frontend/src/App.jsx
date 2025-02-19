import { Route, Routes, useLocation } from "react-router";
import FooterCom from "./components/FooterCom/FooterCom";
import HeaderCom from "./components/HeaderCom/HeaderCom";
import { routes } from "./routes/routes";
import "./App.css";

const App = () => {
  const location = useLocation();
  let admin = false;

  if (
    location.pathname === "/event-manager" ||
    location.pathname === "/admin-usama"
  ) {
    admin = true;
  }

  return (
    <div>
      <div>
        <div className={admin ? "hide" : "visible"}>
          <HeaderCom />
        </div>
        <Routes>
          {routes.map((item, index) => {
            return (
              <Route key={index} path={item.path} element={item.element} />
            );
          })}
        </Routes>
        <div className={admin ? "hide" : "visible"}>
          <FooterCom />
        </div>
      </div>
    </div>
  );
};

export default App;
