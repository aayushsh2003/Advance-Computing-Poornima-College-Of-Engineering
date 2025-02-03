import React from 'react';

const Faculty: React.FC = () => {
  const faculty = [
    {
      name: "Dr. Sarah Johnson",
      role: "Head of Department",
      specialization: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Dr. Michael Chen",
      role: "Professor",
      specialization: "Computer Networks",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Dr. Emily Williams",
      role: "Associate Professor",
      specialization: "Software Engineering",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Dr. Robert Taylor",
      role: "Assistant Professor",
      specialization: "Database Systems",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Faculty</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.specialization}</p>
                <button className="mt-4 w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Faculty
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faculty;