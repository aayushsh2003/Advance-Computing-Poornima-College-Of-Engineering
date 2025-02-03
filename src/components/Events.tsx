import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react';
import eventData from '../data/events/ai-symposium.json';

interface EventsProps {
  setCurrentPage: (page: string) => void;
}

const Events: React.FC<EventsProps> = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const upcomingEvents = [
    {
      title: "Web3 and Blockchain Workshop",
      date: "April 15, 2024",
      description: "A hands-on workshop exploring the fundamentals of blockchain technology and Web3 development.",
      registrationLink: "#register"
    },
    {
      title: "Cloud Computing Summit",
      date: "May 1, 2024",
      description: "Join industry experts for insights into modern cloud architecture and best practices.",
      registrationLink: "#register"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === eventData.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? eventData.gallery.length - 1 : prev - 1
    );
  };

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Events</h2>
        
        {/* Past Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Past Events</h3>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
               onClick={() => setCurrentPage('event-details')}>
            <div className="relative h-96">
              {eventData.gallery.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`absolute w-full h-full transition-opacity duration-500 ${
                    currentSlide === imgIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {eventData.gallery.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide(imgIndex);
                    }}
                    className={`w-2 h-2 rounded-full ${
                      currentSlide === imgIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-4">{eventData.title}</h4>
              <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {new Date(eventData.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {eventData.time.start} - {eventData.time.end}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {eventData.venue}
                </div>
              </div>
              <p className="text-gray-700">{eventData.description}</p>
              <button
                onClick={() => setCurrentPage('event-details')}
                className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
              >
                View Event Details →
              </button>
            </div>
          </div>
        </div>
        
        {/* Upcoming Events */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                <p className="text-blue-600 mb-2">{event.date}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <a
                  href={event.registrationLink}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Register Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;