import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { 
  Map, Home, Info, BookOpen, GraduationCap, 
  Building2, Image as ImageIcon, Download, 
  MessageSquare, PenTool, ShieldCheck, FileText,
  ChevronRight, LogIn, Award
} from 'lucide-react';

const SiteMap: React.FC = () => {
  const sitemapData = [
    {
      title: "Main Navigation",
      icon: Home,
      links: [
        { name: "Home Page", path: "/" },
        { name: "About the School", path: "/about" },
        { name: "Contact Us", path: "/contact" },
        { name: "Admin Portal Login", path: "/login" },
      ]
    },
    {
      title: "Academics",
      icon: BookOpen,
      links: [
        { name: "Academic Overview", path: "/academics" },
        { name: "Pre-Primary Wing", path: "/academics" },
        { name: "Primary Education", path: "/academics" },
        { name: "Middle & Secondary", path: "/academics" },
      ]
    },
    {
      title: "Admissions",
      icon: GraduationCap,
      links: [
        { name: "Admission Process", path: "/admissions" },
        { name: "Fee Structure", path: "/admissions" },
        { name: "Application Forms", path: "/downloads" },
      ]
    },
    {
      title: "Campus & Resources",
      icon: Building2,
      links: [
        { name: "Facilities", path: "/facilities" },
        { name: "Photo Gallery", path: "/gallery" },
        { name: "Downloads & Resources", path: "/downloads" },
      ]
    },
    {
      title: "Community",
      icon: PenTool,
      links: [
        { name: "School Blog", path: "/blog" },
        { name: "Latest Notices", path: "/" },
        { name: "Upcoming Events", path: "/" },
      ]
    },
    {
      title: "Legal & Info",
      icon: ShieldCheck,
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms & Conditions", path: "/terms-and-conditions" },
        { name: "Mandatory Disclosures", path: "/mandatory-disclosures" },
        { name: "CBSE Affiliation", path: "/cbse-affiliation" },
        { name: "Site Map", path: "/site-map" },
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <Map className="mx-auto mb-4 text-blue-200" size={48} />
          <h1 className="text-4xl font-bold mb-2">Site Map</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">A complete visual directory of all the pages and sections on our website.</p>
        </div>
      </div>

      <Section id="sitemap-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapData.map((category, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 text-primary rounded-xl">
                  <category.icon size={24} />
                </div>
                <h2 className="text-xl font-bold text-gray-800">{category.title}</h2>
              </div>
              
              <ul className="space-y-3">
                {category.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      to={link.path} 
                      className="group flex items-center gap-2 text-gray-600 hover:text-primary transition-colors py-1"
                    >
                      <ChevronRight size={14} className="text-gray-300 group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Action Call for Admin */}
        <div className="mt-16 bg-blue-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Are you a staff member?</h3>
            <p className="text-blue-100 mb-8 max-w-lg mx-auto">Access the school administration portal to manage notices, events, and student enquiries.</p>
            <Link 
              to="/login" 
              className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition shadow-lg"
            >
              <LogIn size={20} />
              Go to Admin Login
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SiteMap;