import { createContext, useEffect, useState } from "react";
import { getReq } from "../api/axios";

const eventContext = createContext();

const userAuth = ({ children }) => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
        try {
            const getEvents = await getReq('/events');
            console.log(getEvents);
            setEvents(getEvents.data.data)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    fetchEvents();
  }, [])
  return (
    <div>
      <eventContext.Provider value={events}>{children}</eventContext.Provider>
    </div>
  );
};

export default userAuth;
