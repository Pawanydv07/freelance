import React from 'react';
import '../../css/Home/HomeP7.css'; // Import the CSS file for styling

// Assuming images are placed in `../../assets` directory
import event1 from '../../assets/photo3.jpg';
import event2 from '../../assets/photo3.jpg';
import event3 from '../../assets/photo3.jpg';

const UpcomingEvents = () => {
  const events = [
    { id: 1, name: 'Event 1', price: '$10', image: event1 },
    { id: 2, name: 'Event 2', price: '$15', image: event2 },
    { id: 3, name: 'Event 3', price: '$20', image: event3 },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="event-card bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="relative">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-500"
              />
              <button className="absolute top-4 right-4 bg-teal-500 text-white py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Register
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{event.name}</h2>
              <div className="text-xl font-bold text-teal-500 mt-2">{event.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
