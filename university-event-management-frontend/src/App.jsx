import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import ApplicationNewEvent from "./pages/ApplicationNewEvent/ApplicationNewEventPage";
import ErrorPage from "./pages/Error/ErrorPage";
import FooterCom from "./components/FooterCom/FooterCom";
import HeaderCom from "./components/HeaderCom/HeaderCom";
import Admissions from "./pages/Admissions/Admissions";
import Faculties from "./pages/Faculties/Faculties";
import Library from "./pages/Library/Library";
import Administration from "./pages/Administration/Administration";
import Examination from "./pages/Examination/Examination";
import Almuni from "./pages/Almuni/Almuni";
import Journals from "./pages/Journals/Journals";

const App = () => {
  return (
    <div>
      <HeaderCom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/application-new-event" element={<ApplicationNewEvent />} />
        <Route path="*" element={<ErrorPage />} />

        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculties" element={<Faculties />} />
        <Route path="/library" element={<Library />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/ann_results" element={<Examination />} />
        <Route path="/alumni" element={<Almuni />} />
        <Route path="/journals" element={<Journals />} />
      </Routes>
      <FooterCom />
    </div>
  );
};

export default App;
