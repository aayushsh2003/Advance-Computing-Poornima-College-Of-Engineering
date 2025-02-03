import React from 'react';

const News: React.FC = () => {
  const news = [
    {
      title: "Department Receives Research Grant",
      date: "March 15, 2024",
      category: "Research",
      excerpt: "Our department has been awarded a prestigious research grant for AI development..."
    },
    {
      title: "Students Win Hackathon",
      date: "March 10, 2024",
      category: "Achievement",
      excerpt: "A team of our students secured first place in the National Coding Hackathon..."
    },
    {
      title: "New Lab Equipment Arrival",
      date: "March 5, 2024",
      category: "Infrastructure",
      excerpt: "State-of-the-art computing equipment has been installed in our research lab..."
    }
  ];

  const events = [
    {
      title: "Tech Symposium 2024",
      date: "April 15, 2024",
      time: "9:00 AM",
      location: "Main Auditorium"
    },
    {
      title: "Industry Expert Talk",
      date: "April 20, 2024",
      time: "2:00 PM",
      location: "Seminar Hall"
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">News & Events</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6">Latest News</h3>
            <div className="space-y-8">
              {news.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-blue-600">{item.category}</span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.excerpt}</p>
                  <button className="mt-4 text-blue-600 hover:text-blue-700">
                    Read More →
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                  <div className="text-gray-600">
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                    <p>Location: {event.location}</p>
                  </div>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Register
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;