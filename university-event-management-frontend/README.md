# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

{/\_ <div className={styles.ddo}>
{
navData.map((item, index) => {
return (

<div key={index} className={styles.ddl}>
{
item.innerLinkTextAndUrl?.map((item, index) => {
return (
<div key={index} className={styles.lkw}>
<NavLink to={item.linkUrl}>{item.linkText}</NavLink>
</div>
)
})
}
</div>
)
})
}
</div> _/}

        ---------------------------------------------------


        import { useEffect, useState } from "react";

import EventEditForm from "../components/EventEditForm";
import { getReq } from "../api/axios";
import EventList from "../components/EventList";

const Events = () => {
const [events, setEvents] = useState([]);
const [editingEvent, setEditingEvent] = useState(null);

useEffect(() => {
const fetchEvents = async () => {
try {
const response = await getReq("/events");
setEvents(response.data.data);
} catch (error) {
console.error("Error fetching events:", error);
}
};
fetchEvents();
}, []);

return (

<div>
{editingEvent ? (
<EventEditForm
          eventToEdit={editingEvent}
          setEvents={setEvents}
          setEditingEvent={setEditingEvent}
        />
) : (
<EventList
          events={events}
          setEvents={setEvents}
          setEditingEvent={setEditingEvent}
        />
)}
</div>
);
};

export default Events;
