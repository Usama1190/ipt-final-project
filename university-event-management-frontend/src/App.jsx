import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Events from "./pages/events";
import AddEvent from "./pages/AddEvent";
import ErrorPage from "./pages/ErrorPage";
import HeaderCom from "./components/HeaderCom/HeaderCom";
import FooterCom from "./components/FooterCom/FooterCom";

const App = () => {
  return (
    <div>
      <HeaderCom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/create-event" element={<AddEvent />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <FooterCom />
    </div>
  );
};

export default App;
