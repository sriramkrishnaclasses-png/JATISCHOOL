import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSchoolStore } from '../context/SchoolContext';
import { Phone, Mail, Menu, X, LogIn, Download } from 'lucide-react';
import Logo from './Logo';

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
      <div className="bg-primary text-white py-2 text-sm border-b border-white/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0 text-[11px] uppercase tracking-wider font-bold">
            <span className="flex items-center gap-1.5"><Phone size={12} className="text-secondary" /> {settings.phone}</span>
            <span className="flex items-center gap-1.5"><Mail size={12} className="text-secondary" /> {settings.email}</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hover:text-secondary transition font-bold text-[11px] uppercase tracking-widest">Enquiry</Link>
            <Link to="/login" className="flex items-center gap-1.5 bg-secondary text-primary px-3 py-1 rounded text-[10px] font-black hover:bg-white transition shadow-sm uppercase">
              <LogIn size={12} /> Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b-2 border-secondary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
             <Logo />
             <div className="block">
               <h1 className="text-lg md:text-xl font-black text-primary leading-none tracking-tight uppercase font-serif">{settings.name}</h1>
               <p className="text-[10px] text-accent uppercase tracking-[0.3em] font-black mt-1.5">{settings.tagline}</p>
             </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 font-bold text-primary">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`transition text-[11px] uppercase tracking-widest border-b-2 py-1 ${isActive(link.path) ? 'border-secondary text-secondary' : 'border-transparent hover:text-secondary'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/downloads" className={`transition p-2 rounded-lg ${isActive('/downloads') ? 'bg-secondary text-primary shadow-inner' : 'text-primary hover:bg-stone-100'}`}>
              <Download size={18} />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-primary p-2 hover:bg-stone-50 rounded-lg transition" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t p-6 absolute w-full shadow-2xl h-screen z-50 animate-fadeIn">
            <nav className="flex flex-col space-y-6 text-xl font-black text-primary uppercase tracking-tighter">
              {navLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block border-l-4 pl-4 transition-colors ${isActive(link.path) ? 'border-secondary text-secondary' : 'border-stone-100 hover:text-secondary'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/downloads" 
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 border-l-4 pl-4 ${isActive('/downloads') ? 'border-secondary text-secondary' : 'border-stone-100'}`}
              >
                <Download size={22} /> Downloads
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;