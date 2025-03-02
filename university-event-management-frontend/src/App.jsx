import { Route, Routes, useLocation, useParams } from "react-router";
import FooterCom from "./components/FooterCom/FooterCom";
import HeaderCom from "./components/HeaderCom/HeaderCom";
import { routes } from "./routes/routes";
import "./App.css";

const App = () => {
  const {id} = useParams()
  const location = useLocation();

  const restrictedPaths = [
    "/event-manager",
    "/admin-usama",
    `/students/${id}`,
  ];
  
  const admin = restrictedPaths.includes(location.pathname);
  // console.log(admin);
  
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
