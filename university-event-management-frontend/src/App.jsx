import { Route, Routes } from "react-router";
import FooterCom from "./components/FooterCom/FooterCom";
import HeaderCom from "./components/HeaderCom/HeaderCom";
import { routes } from "./routes/routes";
import './App.css'
import EventManagerDashboard from "./pages/Managers/EventManagerDashboard/EventManagerDashboard";
import AdminDashboard from "./pages/Admin/Dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/event-manager" element={<EventManagerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <div className={'hide'}> 
        <HeaderCom />
        <Routes>
          {routes.map((item, index) => {
            return (
              <Route key={index} path={item.path} element={item.element} />
            );
          })}
        </Routes>
        <FooterCom />
      </div>
    </div>
  );
};

export default App;
