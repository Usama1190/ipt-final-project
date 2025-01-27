import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Events from "./pages/events";
import AddEvent from "./pages/AddEvent";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/create-event" element={<AddEvent />} />
      </Routes>
    </div>
  );
};

export default App;
