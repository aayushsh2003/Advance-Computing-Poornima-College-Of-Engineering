import React from 'react';

const Programs: React.FC = () => {
  const years = [
    {
      title: "2nd Year",
      courses: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Computer Organization",
        "Database Management Systems"
      ]
    },
    {
      title: "3rd Year",
      courses: [
        "Software Engineering",
        "Computer Networks",
        "Operating Systems",
        "Web Technologies"
      ]
    },
    {
      title: "4th Year",
      courses: [
        "Artificial Intelligence",
        "Cloud Computing",
        "Cyber Security",
        "Capstone Project"
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Academic Programs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {years.map((year, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">{year.title}</h3>
              <ul className="space-y-4">
                {year.courses.map((course, courseIndex) => (
                  <li key={courseIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Additional Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Academic Advising</h4>
              <p className="text-gray-600">Get guidance from our expert advisors</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Research Opportunities</h4>
              <p className="text-gray-600">Work on cutting-edge projects</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Internships</h4>
              <p className="text-gray-600">Connect with industry partners</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Study Groups</h4>
              <p className="text-gray-600">Collaborate with peers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;