import React, { useState } from "react";
import { postReq } from "../../../../api/axios";

const EventForm = ({ addEvent }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postReq("/events/create-event", {
        name,
        description,
        date,
        location,
      });
      // Add the new event to the list
      addEvent(response.data); // Add the event to the state in the parent component
      setName("");
      setDescription("");
      setDate("");
      setLocation("");
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <div className={''}>
      <div>
        <h2>Application For New Event</h2>
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
          <button type="submit">Add Event</button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
