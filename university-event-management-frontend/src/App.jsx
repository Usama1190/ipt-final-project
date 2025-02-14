import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Events from "./pages/(Events)/Events";
import ErrorPage from "./pages/ErrorPage";
import HeaderCom from "./components/HeaderCom/HeaderCom";
import FooterCom from "./components/FooterCom/FooterCom";
import ApplicationNewEvent from "./pages/(ApplicationNewEvent)/ApplicationNewEventPage";

const App = () => {
  return (
    <div>
      <HeaderCom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/application-new-event" element={<ApplicationNewEvent />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <FooterCom />
    </div>
  );
};

export default App;
