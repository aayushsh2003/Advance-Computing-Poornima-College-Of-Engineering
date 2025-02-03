import React from 'react';
import { UserCircle2 } from 'lucide-react';

const HodMessage: React.FC = () => {
  return (
    <section id="hod-message" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Message from HOD</h2>
        
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Dr. Sarah Johnson"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Dr. Sarah Johnson</h3>
                <p className="text-blue-600">Head of Department</p>
                <p className="text-gray-600">Ph.D. in Computer Science</p>
              </div>
              
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Welcome to the Department of Advanced Computing at Poornima College of Engineering. Our department stands at the forefront of technological innovation and academic excellence.
                </p>
                <p className="mb-4">
                  We are committed to providing our students with a comprehensive education that combines theoretical knowledge with practical experience. Our curriculum is designed to meet the evolving demands of the industry while fostering research and innovation.
                </p>
                <p>
                  I invite you to explore our programs and join us in our mission to shape the future of computing technology. Our dedicated faculty, state-of-the-art facilities, and strong industry connections provide an ideal environment for academic and professional growth.
                </p>
              </div>
              
              <div className="mt-6 flex items-center gap-4">
                <UserCircle2 className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Dr. Sarah Johnson</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HodMessage;