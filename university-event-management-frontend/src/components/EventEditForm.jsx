import React, { useState, useEffect } from 'react';
import { postReq } from '../api/axios';

const EventEditForm = ({ eventToEdit, setEvents, setEditingEvent }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (eventToEdit) {
      setName(eventToEdit.name);
      setDescription(eventToEdit.description);
      setDate(eventToEdit.date);
      setLocation(eventToEdit.location);
    }
  }, [eventToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postReq(`/events/update-event/${eventToEdit._id}`, {
        name,
        description,
        date,
        location,
      });

      // Update the event in the events list
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event._id === eventToEdit._id ? response.data : event
        )
      );
      // Reset editing state
      setEditingEvent(null);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div>
      <h2>Edit Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Event Name"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Event Description"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Event Location"
        />
        <button type="submit">Update Event</button>
      </form>
    </div>
  );
};

export default EventEditForm;
