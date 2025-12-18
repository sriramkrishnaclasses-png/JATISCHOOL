import React, { useState } from 'react';
import { useSchoolStore } from '../context/SchoolContext';
import { 
  Phone, Mail, Menu, X, Download, MapPin, Facebook, Youtube, Instagram, 
  GraduationCap, BookOpen, Users, Trophy, ChevronRight, Calendar, Search, LogIn, ExternalLink
} from 'lucide-react';
import Section from '../components/Section';
import { Link, useNavigate } from 'react-router-dom';

const PublicPage: React.FC = () => {
  const { settings, content, notices, events, gallery, downloads, addEnquiry } = useSchoolStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('primary');
  const [enquiryForm, setEnquiryForm] = useState({ name: '', email: '', phone: '', classInterested: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const navigate = useNavigate();

  // Helper to scroll without changing router hash
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const testimonials = [
    { name: "S. K. Mishra", role: "Parent of Class 8 Student", text: "Jati International School has transformed my son's personality. The teachers are incredibly supportive." },
    { name: "Priya Das", role: "Student, Class 10", text: "The science labs are amazing. I love the practical approach to learning here." },
    { name: "Dr. R. Mohanty", role: "Parent of Class 3 Student", text: "Best school in Cuttack district. Safety and discipline are top-notch." },
  ];

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      addEnquiry(enquiryForm);
      setEnquiryForm({ name: '', email: '', phone: '', classInterested: '', message: '' });
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Academics', id: 'academics' },
    { name: 'Admissions', id: 'admissions' },
    { name: 'Facilities', id: 'facilities' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <span className="flex items-center gap-1"><Phone size={14} /> {settings.phone}</span>
            <span className="flex items-center gap-1"><Mail size={14} /> {settings.email}</span>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => scrollToSection('contact')} className="hover:text-secondary transition">Enquiry</button>
            <Link to="/login" className="flex items-center gap-1 bg-secondary px-3 py-1 rounded text-xs font-bold hover:bg-orange-600 transition">
              <LogIn size={12} /> Admin Login
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="bg-primary text-white p-2 rounded font-bold text-xl">JIS</div>
             <div>
               <h1 className="text-xl md:text-2xl font-bold text-primary leading-tight">{settings.name}</h1>
               <p className="text-xs text-gray-500 hidden md:block">{settings.tagline}</p>
             </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 font-medium text-gray-700">
            {navLinks.map(link => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.id)} 
                className="hover:text-secondary transition"
              >
                {link.name}
              </button>
            ))}
            <button onClick={() => scrollToSection('downloads')} className="text-primary hover:text-secondary"><Download size={20} /></button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t p-4 absolute w-full shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <button 
                  key={link.name} 
                  onClick={() => scrollToSection(link.id)}
                  className="block text-left text-gray-700 hover:text-secondary"
                >
                  {link.name}
                </button>
              ))}
              <button onClick={() => scrollToSection('downloads')} className="flex items-center gap-2 text-primary">
                <Download size={18} /> Downloads
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[500px] md:h-[600px] flex items-center justify-center bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90 z-10"></div>
        {/* Placeholder for background image */}
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?blur=2')] bg-cover bg-center opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-xs font-bold mb-4 uppercase tracking-wider">Admissions Open 2025-26</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Welcome to <br/>{settings.name}</h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">{settings.tagline}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('admissions')} className="bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-md font-bold transition duration-300">Apply Now</button>
            <button onClick={() => scrollToSection('downloads')} className="border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-3 rounded-md font-bold transition duration-300">Download Prospectus</button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['CBSE Curriculum', 'Smart Classrooms', 'Experienced Faculty', 'Safe Campus'].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-3 rounded text-sm font-semibold border border-white/20">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Board & Events Ticker */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="bg-secondary text-white px-4 py-2 font-bold whitespace-nowrap flex items-center gap-2">
            <span className="animate-pulse w-2 h-2 bg-white rounded-full"></span> Latest News
          </div>
          <div className="flex-1 overflow-hidden py-2 px-4 relative">
            <div className="whitespace-nowrap animate-marquee inline-block">
              {notices.slice(0, 5).map((n, i) => (
                <span key={n.id} className="mr-8 text-sm text-gray-700">
                  <span className="font-bold text-primary">[{n.date}]</span> {n.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <Section id="about" title="About Our School" subTitle="Building foundations for a brighter tomorrow.">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Philosophy</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {content.aboutText}
            </p>
            <div className="grid gap-4">
               <div className="bg-blue-50 p-4 rounded-l border-l-4 border-primary">
                 <h4 className="font-bold text-primary mb-1">Our Vision</h4>
                 <p className="text-sm text-gray-600">{content.visionText}</p>
               </div>
               <div className="bg-orange-50 p-4 rounded-l border-l-4 border-secondary">
                 <h4 className="font-bold text-secondary mb-1">Our Mission</h4>
                 <p className="text-sm text-gray-600">{content.missionText}</p>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="https://picsum.photos/400/500?random=10" alt="Students" className="rounded-lg shadow-lg w-full h-full object-cover mt-8" />
             <img src="https://picsum.photos/400/500?random=11" alt="School" className="rounded-lg shadow-lg w-full h-full object-cover mb-8" />
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section id="why-us" light>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Users, title: "Expert Faculty", desc: "Highly qualified and dedicated teachers." },
            { icon: Trophy, title: "Sports Excellence", desc: "Focus on physical fitness and sportsmanship." },
            { icon: GraduationCap, title: "Holistic Growth", desc: "Academics balanced with co-curriculars." },
            { icon: MapPin, title: "Safe Campus", desc: "CCTV surveillance and secure transport." },
            { icon: BookOpen, title: "Digital Learning", desc: "Smart labs and modern teaching aids." },
            { icon: Users, title: "Parent Connect", desc: "Regular updates and PTMs." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center group">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-white transition">
                <item.icon size={32} />
              </div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Academics */}
      <Section id="academics" title="Academic Excellence">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
           <div 
             className={`p-6 rounded-lg border cursor-pointer transition ${activeAccordion === 'pre' ? 'bg-primary text-white shadow-lg' : 'bg-white hover:bg-gray-50'}`}
             onClick={() => setActiveAccordion('pre')}
           >
             <h3 className="text-xl font-bold mb-2">Pre-Primary</h3>
             <p className={`text-sm ${activeAccordion === 'pre' ? 'text-blue-100' : 'text-gray-600'}`}>Nursery, LKG, UKG</p>
           </div>
           <div 
             className={`p-6 rounded-lg border cursor-pointer transition ${activeAccordion === 'primary' ? 'bg-primary text-white shadow-lg' : 'bg-white hover:bg-gray-50'}`}
             onClick={() => setActiveAccordion('primary')}
           >
             <h3 className="text-xl font-bold mb-2">Primary Wing</h3>
             <p className={`text-sm ${activeAccordion === 'primary' ? 'text-blue-100' : 'text-gray-600'}`}>Classes I to V</p>
           </div>
           <div 
             className={`p-6 rounded-lg border cursor-pointer transition ${activeAccordion === 'secondary' ? 'bg-primary text-white shadow-lg' : 'bg-white hover:bg-gray-50'}`}
             onClick={() => setActiveAccordion('secondary')}
           >
             <h3 className="text-xl font-bold mb-2">Middle & Secondary</h3>
             <p className={`text-sm ${activeAccordion === 'secondary' ? 'text-blue-100' : 'text-gray-600'}`}>Classes VI to X</p>
           </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
           {activeAccordion === 'pre' && (
             <div>
                <h4 className="text-2xl font-bold text-primary mb-4">Pre-Primary Education</h4>
                <p className="mb-4 text-gray-700">Focus on sensory development, motor skills, and social interaction through play-way methodology.</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Phonics and Storytelling</li>
                  <li>Art and Craft</li>
                  <li>Basic Numeracy</li>
                </ul>
             </div>
           )}
           {activeAccordion === 'primary' && (
             <div>
                <h4 className="text-2xl font-bold text-primary mb-4">Primary Years (I-V)</h4>
                <p className="mb-4 text-gray-700">Building strong foundations in core subjects while encouraging curiosity and creativity.</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>English, Hindi, Odia, Mathematics, EVS</li>
                  <li>Computer Science & GK</li>
                  <li>Music, Dance, and Sports</li>
                </ul>
             </div>
           )}
           {activeAccordion === 'secondary' && (
             <div>
                <h4 className="text-2xl font-bold text-primary mb-4">Middle & Secondary (VI-X)</h4>
                <p className="mb-4 text-gray-700">Rigorous academic curriculum aligned with CBSE standards, preparing students for board examinations and future careers.</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Mathematics, Science (Physics, Chem, Bio)</li>
                  <li>Social Sciences (History, Geo, Civics)</li>
                  <li>Artificial Intelligence & IT</li>
                </ul>
             </div>
           )}
        </div>
      </Section>

      {/* Facilities */}
      <Section id="facilities" title="World Class Facilities" light>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Smart Class', 'Science Labs', 'Library', 'Computer Lab', 'Transport', 'CCTV Security', 'Playground', 'Medical Room'].map((fac, idx) => (
             <div key={idx} className="bg-white p-4 rounded shadow hover:shadow-md text-center transition">
               <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 text-secondary">
                 <div className="w-4 h-4 bg-secondary rounded-full"></div>
               </div>
               <h5 className="font-semibold text-gray-800">{fac}</h5>
             </div>
          ))}
        </div>
      </Section>

      {/* Admissions */}
      <Section id="admissions" title="Admissions">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">1</div> How to Apply</h3>
            <div className="space-y-6 border-l-2 border-gray-200 pl-6 relative">
               {[
                 { step: "Enquiry", desc: "Visit campus or fill the online form." },
                 { step: "Registration", desc: "Purchase and fill the application form." },
                 { step: "Interaction", desc: "Student interaction/test for assessment." },
                 { step: "Admission", desc: "Submit documents and pay fees." }
               ].map((s, i) => (
                 <div key={i} className="relative">
                   <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-secondary border-4 border-white"></div>
                   <h4 className="font-bold text-lg">{s.step}</h4>
                   <p className="text-gray-600 text-sm">{s.desc}</p>
                 </div>
               ))}
            </div>
            <button className="mt-8 bg-primary text-white px-6 py-2 rounded shadow hover:bg-blue-800 transition">Download Admission Form</button>
          </div>
          
          <div className="bg-white p-6 shadow-xl rounded-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-center">Fee Structure (Indicative)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="p-3 rounded-tl">Class</th>
                    <th className="p-3">Admission</th>
                    <th className="p-3 rounded-tr">Monthly Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="p-3">Nursery - UKG</td><td className="p-3">₹10,000</td><td className="p-3">₹1,500</td></tr>
                  <tr><td className="p-3">Std I - V</td><td className="p-3">₹12,000</td><td className="p-3">₹1,800</td></tr>
                  <tr><td className="p-3">Std VI - VIII</td><td className="p-3">₹15,000</td><td className="p-3">₹2,200</td></tr>
                  <tr><td className="p-3">Std IX - X</td><td className="p-3">₹18,000</td><td className="p-3">₹2,500</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">* Transport and uniform charges extra.</p>
          </div>
        </div>
      </Section>

      {/* News, Events & Downloads Grid */}
      <Section id="news-downloads" light className="bg-gray-50">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Latest News */}
          <div className="bg-white p-6 rounded-lg shadow h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-primary">Notice Board</h3>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Latest</span>
            </div>
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
              {notices.map(notice => (
                <div key={notice.id} className="border-b pb-2 last:border-0">
                  <p className="text-xs text-gray-400 font-semibold">{notice.date} • {notice.category}</p>
                  <p className="text-sm font-medium text-gray-800 hover:text-secondary cursor-pointer">{notice.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white p-6 rounded-lg shadow h-full">
             <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-primary">Upcoming Events</h3>
              <Calendar size={18} className="text-secondary" />
            </div>
            <div className="space-y-4">
               {events.slice(0, 3).map(evt => (
                 <div key={evt.id} className="flex gap-3">
                   <div className="bg-blue-50 text-blue-800 p-2 rounded text-center min-w-[50px]">
                      <span className="block text-xs font-bold uppercase">{new Date(evt.date).toLocaleString('default', { month: 'short' })}</span>
                      <span className="block text-lg font-bold">{new Date(evt.date).getDate()}</span>
                   </div>
                   <div>
                     <h4 className="text-sm font-bold">{evt.title}</h4>
                     <p className="text-xs text-gray-500">{evt.time} | {evt.location}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Downloads */}
          <div id="downloads" className="bg-white p-6 rounded-lg shadow h-full">
             <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-primary">Downloads</h3>
              <Download size={18} className="text-secondary" />
            </div>
            <div className="space-y-3">
               {downloads.slice(0, 5).map(dl => (
                 <a key={dl.id} href={dl.url} onClick={(e) => { if(dl.url === '#') e.preventDefault(); }} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded group transition">
                   <div className="flex items-center gap-3">
                     <div className="bg-red-50 text-red-500 p-1 rounded">
                       <ExternalLink size={14} />
                     </div>
                     <span className="text-sm text-gray-700 font-medium">{dl.title}</span>
                   </div>
                   <Download size={14} className="text-gray-400 group-hover:text-primary" />
                 </a>
               ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section id="gallery" title="Gallery">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.slice(0, 8).map(item => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg cursor-pointer h-48" onClick={() => setLightboxImage(item.url)}>
              <img src={item.url} alt={item.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-bold">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
           <button onClick={() => scrollToSection('gallery')} className="text-primary font-semibold hover:text-secondary flex items-center gap-1 mx-auto">View All Photos <ChevronRight size={16} /></button>
        </div>
      </Section>
      
      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-gray-300"><X size={32} /></button>
          <img src={lightboxImage} alt="Gallery Full" className="max-w-full max-h-[90vh] rounded shadow-2xl" />
        </div>
      )}

      {/* Testimonials */}
      <Section id="testimonials" light className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-12">What Parents Say</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg relative">
           <div className="text-4xl text-secondary opacity-30 absolute top-4 left-6">"</div>
           <p className="text-xl md:text-2xl text-gray-700 italic mb-6">
             {testimonials[activeTestimonial].text}
           </p>
           <div>
             <h4 className="font-bold text-lg">{testimonials[activeTestimonial].name}</h4>
             <p className="text-sm text-gray-500">{testimonials[activeTestimonial].role}</p>
           </div>
           <div className="flex justify-center gap-2 mt-8">
             {testimonials.map((_, i) => (
               <button 
                 key={i} 
                 className={`w-3 h-3 rounded-full transition ${i === activeTestimonial ? 'bg-secondary scale-110' : 'bg-gray-300'}`}
                 onClick={() => setActiveTestimonial(i)}
               />
             ))}
           </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact Us">
        <div className="grid md:grid-cols-2 gap-12">
           <div className="space-y-6">
             <div className="flex items-start gap-4">
               <div className="bg-blue-50 p-3 rounded-full text-primary"><MapPin /></div>
               <div>
                 <h4 className="font-bold text-lg">Address</h4>
                 <p className="text-gray-600">{settings.address}</p>
               </div>
             </div>
             <div className="flex items-start gap-4">
               <div className="bg-blue-50 p-3 rounded-full text-primary"><Phone /></div>
               <div>
                 <h4 className="font-bold text-lg">Phone</h4>
                 <p className="text-gray-600">{settings.phone}</p>
               </div>
             </div>
             <div className="flex items-start gap-4">
               <div className="bg-blue-50 p-3 rounded-full text-primary"><Mail /></div>
               <div>
                 <h4 className="font-bold text-lg">Email</h4>
                 <p className="text-gray-600">{settings.email}</p>
               </div>
             </div>
             
             {/* Map Placeholder */}
             <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mt-6">
                Google Map Placeholder
             </div>
           </div>

           <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
             <h3 className="text-2xl font-bold mb-6">Send an Enquiry</h3>
             <form onSubmit={handleEnquirySubmit} className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                 <input 
                   required
                   type="text" 
                   placeholder="Your Name" 
                   className="w-full p-3 border rounded focus:outline-none focus:border-primary"
                   value={enquiryForm.name}
                   onChange={e => setEnquiryForm({...enquiryForm, name: e.target.value})}
                 />
                 <input 
                   required
                   type="tel" 
                   placeholder="Phone Number" 
                   className="w-full p-3 border rounded focus:outline-none focus:border-primary"
                   value={enquiryForm.phone}
                   onChange={e => setEnquiryForm({...enquiryForm, phone: e.target.value})}
                 />
               </div>
               <input 
                 required
                 type="email" 
                 placeholder="Email Address" 
                 className="w-full p-3 border rounded focus:outline-none focus:border-primary"
                 value={enquiryForm.email}
                 onChange={e => setEnquiryForm({...enquiryForm, email: e.target.value})}
               />
               <select 
                  className="w-full p-3 border rounded focus:outline-none focus:border-primary text-gray-600"
                  value={enquiryForm.classInterested}
                  onChange={e => setEnquiryForm({...enquiryForm, classInterested: e.target.value})}
               >
                 <option value="">Select Class Interested In</option>
                 <option value="Nursery">Nursery</option>
                 <option value="KG">KG</option>
                 <option value="1-5">Class 1-5</option>
                 <option value="6-8">Class 6-8</option>
                 <option value="9-10">Class 9-10</option>
               </select>
               <textarea 
                 required
                 placeholder="Message / Query" 
                 rows={4} 
                 className="w-full p-3 border rounded focus:outline-none focus:border-primary"
                 value={enquiryForm.message}
                 onChange={e => setEnquiryForm({...enquiryForm, message: e.target.value})}
               ></textarea>
               
               <button 
                 type="submit" 
                 disabled={formStatus !== 'idle'}
                 className={`w-full py-3 rounded font-bold text-white transition ${formStatus === 'success' ? 'bg-green-600' : 'bg-secondary hover:bg-orange-600'}`}
               >
                 {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Submit Enquiry'}
               </button>
             </form>
           </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
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
               <li><button onClick={() => scrollToSection('about')} className="hover:text-secondary">About Us</button></li>
               <li><button onClick={() => scrollToSection('academics')} className="hover:text-secondary">Academics</button></li>
               <li><button onClick={() => scrollToSection('admissions')} className="hover:text-secondary">Admissions</button></li>
               <li><button onClick={() => scrollToSection('gallery')} className="hover:text-secondary">Gallery</button></li>
             </ul>
           </div>

           <div>
             <h4 className="text-white font-bold mb-4">Information</h4>
             <ul className="space-y-2 text-sm">
               <li><a href="#!" onClick={e => e.preventDefault()} className="hover:text-secondary">Privacy Policy</a></li>
               <li><a href="#!" onClick={e => e.preventDefault()} className="hover:text-secondary">Terms & Conditions</a></li>
               <li><a href="#!" onClick={e => e.preventDefault()} className="hover:text-secondary">Mandatory Disclosures</a></li>
               <li><a href="#!" onClick={e => e.preventDefault()} className="hover:text-secondary">CBSE Affiliation</a></li>
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
    </div>
  );
};

export default PublicPage;