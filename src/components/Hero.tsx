import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Advanced Computing Department
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8">
          Poornima College of Engineering
        </h2>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12">
          Empowering future tech leaders through innovation, research, and excellence in education
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#programs"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore Programs
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;