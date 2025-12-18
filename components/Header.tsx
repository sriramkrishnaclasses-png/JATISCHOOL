import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSchoolStore } from '../context/SchoolContext';
import { Phone, Mail, Menu, X, LogIn, Download } from 'lucide-react';

const Header: React.FC = () => {
  const { settings } = useSchoolStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <span className="flex items-center gap-1"><Phone size={14} /> {settings.phone}</span>
            <span className="flex items-center gap-1"><Mail size={14} /> {settings.email}</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hover:text-secondary transition">Enquiry</Link>
            <Link to="/login" className="flex items-center gap-1 bg-secondary px-3 py-1 rounded text-xs font-bold hover:bg-orange-600 transition">
              <LogIn size={12} /> Admin Login
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
             <div className="bg-primary text-white p-2 rounded font-bold text-xl">JIS</div>
             <div>
               <h1 className="text-xl md:text-2xl font-bold text-primary leading-tight">{settings.name}</h1>
               <p className="text-xs text-gray-500 hidden md:block">{settings.tagline}</p>
             </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 font-medium text-gray-700">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`transition ${isActive(link.path) ? 'text-secondary font-bold' : 'hover:text-secondary'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/downloads" className={`transition ${isActive('/downloads') ? 'text-secondary' : 'text-primary hover:text-secondary'}`}>
              <Download size={20} />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t p-4 absolute w-full shadow-lg h-screen z-50">
            <nav className="flex flex-col space-y-4 text-lg">
              {navLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-left ${isActive(link.path) ? 'text-secondary font-bold' : 'text-gray-700 hover:text-secondary'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/downloads" 
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-2 ${isActive('/downloads') ? 'text-secondary font-bold' : 'text-primary'}`}
              >
                <Download size={18} /> Downloads
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;