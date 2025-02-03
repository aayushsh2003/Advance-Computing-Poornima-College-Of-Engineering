import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-gray-600">
                    Advanced Computing Department<br />
                    Poornima College of Engineering<br />
                    ISI-2, RIICO Institutional Area<br />
                    Sitapura, Jaipur, Rajasthan 302022
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-600">+91 141 2770120</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">info.ace@poornima.edu.in</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Office Hours</h4>
              <div className="text-gray-600">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;