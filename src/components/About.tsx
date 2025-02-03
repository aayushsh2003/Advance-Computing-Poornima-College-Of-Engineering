import React from 'react';
import { BookOpen, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Our Department</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence in Education</h3>
            <p className="text-gray-600">Providing cutting-edge curriculum and hands-on learning experiences</p>
          </div>
          
          <div className="text-center p-6">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
            <p className="text-gray-600">Learn from industry veterans and renowned researchers</p>
          </div>
          
          <div className="text-center p-6">
            <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
            <p className="text-gray-600">Accredited programs with strong industry connections</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-600 mb-8">
            To be a center of excellence in computing education, fostering innovation, research, and technological advancement while nurturing future leaders in the field of computer science.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-600">
            To provide quality education through innovative teaching methods, promote research and development, and prepare students for successful careers in the ever-evolving field of computing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;