import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Download, ChevronLeft, ChevronRight, Linkedin, Mail } from 'lucide-react';
import eventData from '../data/events/ai-symposium.json';

const EventDetails: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % eventData.gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + eventData.gallery.length) % eventData.gallery.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={eventData.gallery[0].url}
            alt={eventData.title}
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">{eventData.title}</h1>
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                {new Date(eventData.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                {eventData.time.start} - {eventData.time.end}
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                {eventData.venue}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">About This Event</h2>
          <p className="text-gray-700 text-lg">{eventData.description}</p>
        </section>

        {/* Event Coordinators */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Event Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventData.coordinators.map((coordinator, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-6">
                <img
                  src={coordinator.image}
                  alt={coordinator.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-1">{coordinator.name}</h3>
                  <p className="text-blue-600 mb-2">{coordinator.role}</p>
                  <div className="flex space-x-4">
                    <a
                      href={`mailto:${coordinator.email}`}
                      className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </a>
                    <a
                      href={coordinator.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <Linkedin className="w-4 h-4 mr-1" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Speakers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventData.speakers.map((speaker, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-6 mb-4">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{speaker.name}</h3>
                    <p className="text-gray-600">{speaker.organization}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Topic:</h4>
                  <p className="text-gray-700">{speaker.topic}</p>
                </div>
                <a
                  href={speaker.presentation}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Presentation
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Schedule</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {eventData.schedule.map((item, index) => (
              <div
                key={index}
                className={`p-6 flex flex-col md:flex-row md:items-center md:justify-between ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div className="font-semibold text-blue-600 mb-2 md:mb-0 md:w-1/3">
                  {item.time}
                </div>
                <div className="md:w-2/3">{item.activity}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Event Gallery</h2>
          <div className="relative bg-black rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={eventData.gallery[currentImage].url}
                alt={eventData.gallery[currentImage].caption}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-lg font-semibold">{eventData.gallery[currentImage].caption}</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {eventData.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative rounded-lg overflow-hidden ${
                  currentImage === index ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </section>

        {/* Event Materials */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Event Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href={eventData.materials.brochure}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between hover:shadow-xl transition-shadow"
            >
              <span className="text-lg font-semibold">Event Brochure</span>
              <Download className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href={eventData.materials.workshop}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between hover:shadow-xl transition-shadow"
            >
              <span className="text-lg font-semibold">Workshop Materials</span>
              <Download className="w-6 h-6 text-blue-600" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventDetails;