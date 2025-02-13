import React from 'react';
import { delReq } from '../api/axios';

const EventList = ({ events, setEvents, setEditingEvent }) => {

  const handleDelete = async (eventId) => {
    try {
      await delReq(`/events/delete-event/${eventId}`);
      setEvents((prevEvents) => prevEvents.filter((event) => event._id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div>
      <h2>Events List</h2>
      <ul>
        {events?.map((event) => (
          <li key={event._id}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.location}</p>
            <button onClick={() => handleDelete(event._id)}>Delete</button>
            <button onClick={() => setEditingEvent(event)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
