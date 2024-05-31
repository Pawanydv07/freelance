import React from 'react';
import "../../css/Home/HomeP7.css";

// Assuming images are placed in `../../assets` directory
import event1 from '../../assets/photo3.jpg';
import event2 from '../../assets/photo3.jpg';
import event3 from '../../assets/photo3.jpg';

const UpcomingEvents = () => {
  const events = [
    { id: 1, name: 'Event 1', price: '$10', image: event1 },
    { id: 2, name: 'Event 2', price: '$15', image: event2 },
    { id: 3, name: 'Event 3', price: '$20', image: event3 }
  ];

  return (
    <div className="upcoming-events-container">
      {/* <h1 className="heading">Upcoming Events</h1> */}
      <div className="events-wrapper">
        {events.map((event) => (
          <div key={event.id} className="event-box">
            <div className="event-image-container">
              <img
                src={event.image}
                alt={event.name}
                className="event-image"
              />
            </div>
            <div className="event-details">
              <h2 className="event-name">{event.name}</h2>
              <div className="event-price">{event.price}</div>
              <button className="register-button">Register</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
