import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, setCurrentPage }) => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => setCurrentPage('home')} className="text-xl font-bold text-gray-800">
              ACE Department
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-gray-900 transition-colors">Home</button>
            <button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-gray-900 transition-colors">HOD's Message</button>
            <button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-gray-900 transition-colors">About</button>
            <button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-gray-900 transition-colors">Programs</button>
            <button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-gray-900 transition-colors">Faculty</button>
            <button onClick={() => setCurrentPage('events')} className="text-gray-600 hover:text-gray-900 transition-colors">Events</button>
            <button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-gray-900 transition-colors">News</button>
            <button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-gray-900 transition-colors">Contact</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Home</button>
            <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">HOD's Message</button>
            <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">About</button>
            <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Programs</button>
            <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Faculty</button>
            <button onClick={() => { setCurrentPage('events'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Events</button>
            <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">News</button>
            <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;