import { Route, Routes } from "react-router";
import FooterCom from "./components/FooterCom/FooterCom";
import HeaderCom from "./components/HeaderCom/HeaderCom";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <div>
      <HeaderCom />
      <Routes>
        {routes.map((item, index) => {
          return <Route key={index} path={item.path} element={item.element} />;
        })}
      </Routes>
      <FooterCom />
    </div>
  );
};

export default App;
