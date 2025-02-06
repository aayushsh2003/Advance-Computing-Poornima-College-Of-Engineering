import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Faculty from './components/Faculty';
import News from './components/News';
import Contact from './components/Contact';
import HodMessage from './components/HodMessage';
import Events from './components/Events';
import EventDetails from './components/EventDetails';
import EventsPage from './pages/EventsPage';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'events':
        return <EventsPage setCurrentPage={setCurrentPage} />;
      case 'event-details':
        return <EventDetails />;
      default:
        return (
          <main className="space-y-0">
            <Hero />
            <HodMessage />
            <About />
            <Programs />
            <Faculty />
            <Events setCurrentPage={setCurrentPage} />
            <News />
            <Contact />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-blue-400">Home</button></li>
                <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-400">About</button></li>
                <li><button onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-400">Programs</button></li>
                <li><button onClick={() => document.getElementById('faculty')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-400">Faculty</button></li>
                <li><button onClick={() => setCurrentPage('events')} className="hover:text-blue-400">Events</button></li>
                <li><button onClick={() => document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-400">News</button></li>
                <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-400">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>B.Tech in Computer Science</li>
                <li>M.Tech in Advanced Computing</li>
                <li>PhD Program</li>
                <li>Certificate Courses</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>Poornima College of Engineering</p>
              <p>ISI-2, RIICO Institutional Area</p>
              <p>Sitapura, Jaipur</p>
              <p>Rajasthan 302022</p>
              <p>Phone: +91 141 2770120</p>
              <p>Email: info.ace@poornima.edu.in</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-blue-400">LinkedIn</a>
                <a href="#" className="hover:text-blue-400">Twitter</a>
                <a href="#" className="hover:text-blue-400">Facebook</a>
                <a href="#" className="hover:text-blue-400">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-gray-800 pt-8">
            <p>&copy; {new Date().getFullYear()} Advanced Computing Department - Poornima College of Engineering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;