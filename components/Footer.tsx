import React from 'react';
import { Link } from 'react-router-dom';
import { useSchoolStore } from '../context/SchoolContext';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { settings } = useSchoolStore();
  
  return (
    <footer className="bg-[#051a14] text-stone-400 py-16 mt-auto border-t-4 border-secondary">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
         <div>
           <div className="mb-6">
             <h3 className="text-white font-serif font-bold text-2xl uppercase tracking-tighter">{settings.name}</h3>
             <div className="w-12 h-1 bg-secondary mt-2"></div>
           </div>
           <p className="text-sm leading-relaxed mb-6 font-medium">
             {settings.tagline}. Dedicated to excellence in education and holistic character development.
           </p>
           <div className="flex gap-4">
             <a 
               href={settings.facebook} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
               aria-label="Facebook"
             >
               <Facebook size={18} />
             </a>
             <a 
               href={settings.instagram} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
               aria-label="Instagram"
             >
               <Instagram size={18} />
             </a>
             <a 
               href={settings.youtube} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
               aria-label="Youtube"
             >
               <Youtube size={18} />
             </a>
           </div>
         </div>
         
         <div>
           <h4 className="text-white font-serif font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
           <ul className="space-y-3 text-sm">
             <li><Link to="/about" className="hover:text-secondary transition-colors flex items-center gap-2">• About Us</Link></li>
             <li><Link to="/academics" className="hover:text-secondary transition-colors flex items-center gap-2">• Academics</Link></li>
             <li><Link to="/admissions" className="hover:text-secondary transition-colors flex items-center gap-2">• Admissions</Link></li>
             <li><Link to="/gallery" className="hover:text-secondary transition-colors flex items-center gap-2">• Gallery</Link></li>
             <li><Link to="/site-map" className="hover:text-secondary transition-colors flex items-center gap-2">• Site Map</Link></li>
             <li><Link to="/blog" className="hover:text-secondary transition-colors flex items-center gap-2">• Blog</Link></li>
           </ul>
         </div>

         <div>
           <h4 className="text-white font-serif font-bold text-lg mb-6 uppercase tracking-wider">Legal Info</h4>
           <ul className="space-y-3 text-sm">
             <li><Link to="/privacy-policy" className="hover:text-secondary transition-colors flex items-center gap-2">• Privacy Policy</Link></li>
             <li><Link to="/terms-and-conditions" className="hover:text-secondary transition-colors flex items-center gap-2">• Terms & Conditions</Link></li>
             <li><Link to="/mandatory-disclosures" className="hover:text-secondary transition-colors flex items-center gap-2">• Mandatory Disclosures</Link></li>
             <li><Link to="/cbse-affiliation" className="hover:text-secondary transition-colors flex items-center gap-2">• CBSE Affiliation</Link></li>
           </ul>
         </div>

         <div>
           <h4 className="text-white font-serif font-bold text-lg mb-6 uppercase tracking-wider">Reach Us</h4>
           <ul className="space-y-4 text-sm">
             <li className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary shrink-0" /> 
                <span className="leading-relaxed">{settings.address}</span>
             </li>
             <li className="flex items-center gap-3">
                <Phone size={20} className="text-secondary shrink-0" /> 
                <span className="font-bold">{settings.phone}</span>
             </li>
             <li className="flex items-center gap-3">
                <Mail size={20} className="text-secondary shrink-0" /> 
                <span className="break-all">{settings.email}</span>
             </li>
           </ul>
         </div>
      </div>
      <div className="border-t border-white/5 mt-16 pt-8 text-center text-xs tracking-widest uppercase font-bold text-stone-500">
        <p>&copy; {new Date().getFullYear()} {settings.name}. <span className="text-secondary/50">Designed for Excellence.</span></p>
      </div>
    </footer>
  );
};

export default Footer;