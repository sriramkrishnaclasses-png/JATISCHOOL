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
           <img src="/logo.png" alt="Jati International School Crest" className="h-20 w-auto mb-6 opacity-90 drop-shadow-md" />
           <p className="text-sm leading-relaxed mb-4">
             {settings.tagline}. Dedicated to excellence in education and character building.
           </p>
           <div className="flex gap-4">
             <a 
               href={settings.facebook} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-blue-500 transition-colors"
               aria-label="Facebook"
             >
               <Facebook size={20} />
             </a>
             <a 
               href={settings.instagram} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-pink-500 transition-colors"
               aria-label="Instagram"
             >
               <Instagram size={20} />
             </a>
             <a 
               href={settings.youtube} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-red-500 transition-colors"
               aria-label="Youtube"
             >
               <Youtube size={20} />
             </a>
           </div>
         </div>
         
         <div>
           <h4 className="text-white font-bold mb-4">Quick Links</h4>
           <ul className="space-y-2 text-sm">
             <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
             <li><Link to="/academics" className="hover:text-secondary transition-colors">Academics</Link></li>
             <li><Link to="/admissions" className="hover:text-secondary transition-colors">Admissions</Link></li>
             <li><Link to="/gallery" className="hover:text-secondary transition-colors">Gallery</Link></li>
             <li><Link to="/site-map" className="hover:text-secondary transition-colors">Site Map</Link></li>
             <li><Link to="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
           </ul>
         </div>

         <div>
           <h4 className="text-white font-bold mb-4">Information</h4>
           <ul className="space-y-2 text-sm">
             <li><Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
             <li><Link to="/terms-and-conditions" className="hover:text-secondary transition-colors">Terms & Conditions</Link></li>
             <li><Link to="/mandatory-disclosures" className="hover:text-secondary transition-colors">Mandatory Disclosures</Link></li>
             <li><Link to="/cbse-affiliation" className="hover:text-secondary transition-colors">CBSE Affiliation</Link></li>
           </ul>
         </div>

         <div>
           <h4 className="text-white font-bold mb-4">Contact</h4>
           <ul className="space-y-2 text-sm">
             <li className="flex items-start gap-2"><MapPin size={16} className="mt-1 flex-shrink-0 text-secondary" /> {settings.address}</li>
             <li className="flex items-center gap-2"><Phone size={16} className="text-secondary" /> {settings.phone}</li>
             <li className="flex items-center gap-2"><Mail size={16} className="text-secondary" /> {settings.email}</li>
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