import React from 'react';
import { Link } from 'react-router-dom';
import { useSchoolStore } from '../context/SchoolContext';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const { settings } = useSchoolStore();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
         <div>
           <div className="text-2xl font-bold text-white mb-4">JIS</div>
           <p className="text-sm leading-relaxed mb-4">
             {settings.tagline}. Dedicated to excellence in education and character building.
           </p>
           <div className="flex gap-4">
             <a href="#!" onClick={e => e.preventDefault()} className="hover:text-white"><Facebook size={20} /></a>
             <a href="#!" onClick={e => e.preventDefault()} className="hover:text-white"><Instagram size={20} /></a>
             <a href="#!" onClick={e => e.preventDefault()} className="hover:text-white"><Youtube size={20} /></a>
           </div>
         </div>
         
         <div>
           <h4 className="text-white font-bold mb-4">Quick Links</h4>
           <ul className="space-y-2 text-sm">
             <li><Link to="/about" className="hover:text-secondary">About Us</Link></li>
             <li><Link to="/academics" className="hover:text-secondary">Academics</Link></li>
             <li><Link to="/admissions" className="hover:text-secondary">Admissions</Link></li>
             <li><Link to="/gallery" className="hover:text-secondary">Gallery</Link></li>
             <li><Link to="/blog" className="hover:text-secondary">Blog</Link></li>
           </ul>
         </div>

         <div>
           <h4 className="text-white font-bold mb-4">Information</h4>
           <ul className="space-y-2 text-sm">
             <li><Link to="#" className="hover:text-secondary">Privacy Policy</Link></li>
             <li><Link to="#" className="hover:text-secondary">Terms & Conditions</Link></li>
             <li><Link to="#" className="hover:text-secondary">Mandatory Disclosures</Link></li>
             <li><Link to="#" className="hover:text-secondary">CBSE Affiliation</Link></li>
           </ul>
         </div>

         <div>
           <h4 className="text-white font-bold mb-4">Contact</h4>
           <ul className="space-y-2 text-sm">
             <li className="flex items-start gap-2"><MapPin size={16} className="mt-1 flex-shrink-0" /> {settings.address}</li>
             <li className="flex items-center gap-2"><Phone size={16} /> {settings.phone}</li>
             <li className="flex items-center gap-2"><Mail size={16} /> {settings.email}</li>
           </ul>
         </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} {settings.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;