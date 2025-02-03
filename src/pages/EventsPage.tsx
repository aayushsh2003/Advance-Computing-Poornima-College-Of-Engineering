import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import aiSymposium from '../data/events/ai-symposium.json';

interface EventsPageProps {
  setCurrentPage: (page: string) => void;
}

const EventsPage: React.FC<EventsPageProps> = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const upcomingEvents = [
    {
      title: "Web3 and Blockchain Workshop",
      date: "April 15, 2024",
      description: "A hands-on workshop exploring the fundamentals of blockchain technology and Web3 development.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80",
      venue: "Tech Hub, Block A",
      time: "10:00 AM - 4:00 PM",
      registrationLink: "#register",
      tags: ["Blockchain", "Web3", "Workshop"]
    },
    {
      title: "Cloud Computing Summit",
      date: "May 1, 2024",
      description: "Join industry experts for insights into modern cloud architecture and best practices.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80",
      venue: "Main Auditorium",
      time: "9:00 AM - 5:00 PM",
      registrationLink: "#register",
      tags: ["Cloud", "DevOps", "Summit"]
    }
  ];

  const pastEvents = [
    {
      ...aiSymposium,
      image: aiSymposium.gallery[0].url
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-16">Department Events</h1>

        {/* Upcoming Events Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-white/90 text-gray-800 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      {event.venue}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  <a
                    href={event.registrationLink}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Past Events</h2>
          <div className="grid grid-cols-1 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setCurrentPage('event-details')}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">{event.title}</h3>
                    <div className="space-y-2 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        {new Date(event.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        {event.time.start} - {event.time.end}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        {event.venue}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6">{event.description}</p>
                    <button
                      onClick={() => setCurrentPage('event-details')}
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      View Event Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventsPage;