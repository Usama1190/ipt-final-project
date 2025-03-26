import { createContext, useEffect, useState } from "react";
import { getReq } from "../api/axios";

const eventAppsContext = createContext();

const userAuth = ({ children }) => {
  const [eventApps, setEventApps] = useState(null);

  useEffect(() => {
    const fetchEventApps = async () => {
        try {
            const getEventApps = await getReq('/events/eventapps');
            console.log(getEventApps);
            setEventApps(getEventApps.data.data)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    fetchEventApps();
  }, [])
  return (
    <div>
      <eventAppsContext.Provider value={eventApps}>{children}</eventAppsContext.Provider>
    </div>
  );
};

export default userAuth;
