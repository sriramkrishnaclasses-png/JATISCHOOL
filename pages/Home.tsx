import React, { useState } from 'react';
import { useSchoolStore } from '../context/SchoolContext';
import { Users, Trophy, GraduationCap, MapPin, BookOpen, Calendar, ChevronRight } from 'lucide-react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  const { notices, events, settings } = useSchoolStore();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    { name: "S. K. Mishra", role: "Parent of Class 8 Student", text: "Jati International School has transformed my son's personality. The teachers are incredibly supportive." },
    { name: "Priya Das", role: "Student, Class 10", text: "The science labs are amazing. I love the practical approach to learning here." },
    { name: "Dr. R. Mohanty", role: "Parent of Class 3 Student", text: "Best school in Cuttack district. Safety and discipline are top-notch." },
  ];

  return (
    <div className="font-sans text-gray-800">
      
      {/* Hero Section with Enhanced Typography */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden bg-[#0a261e]">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?q=80&w=1920&auto=format&fit=crop" 
            alt="Students learning in nature" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a261e]/95 via-[#0a261e]/70 to-[#0a261e]/95"></div>
        </div>
        
        <div className="relative z-10 container mx-auto text-center py-24">
          <div className="mb-12 animate-fadeIn">
            <h2 className="text-secondary font-serif italic text-2xl md:text-3xl font-bold mb-4">{settings.name}</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </div>

          <p className="text-xs md:text-sm text-secondary tracking-[0.4em] uppercase mb-8 font-black border-b border-secondary/30 pb-3 inline-block">
            Nursery to Class V | Gurukul-Inspired • Value-Based
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl max-w-5xl mx-auto">
            Education that Shapes <br className="hidden md:block" />
            <span className="text-secondary italic">Character & Clarity</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-300 mb-12 max-w-2xl leading-relaxed font-medium mx-auto opacity-90">
            Blending timeless Gurukul values with a strong CBSE-aligned foundation to nurture disciplined and confident learners.
          </p>

          <div className="flex flex-wrap gap-5 justify-center">
            <Link 
              to="/admissions" 
              className="bg-secondary hover:bg-white text-primary px-12 py-5 rounded-xl font-black tracking-widest shadow-[0_15px_30px_-5px_rgba(212,178,101,0.4)] transition-all uppercase text-sm border-2 border-secondary"
            >
              Apply Now
            </Link>
            <Link 
              to="/downloads" 
              className="bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 px-12 py-5 rounded-xl font-black tracking-widest transition-all uppercase text-sm backdrop-blur-md"
            >
              Prospectus
            </Link>
          </div>
        </div>

        {/* Tagline Footer */}
        <div className="absolute bottom-10 left-0 right-0 text-center opacity-30 pointer-events-none">
          <p className="text-xs md:text-sm font-serif italic text-secondary tracking-[0.6em] uppercase font-black">{settings.tagline}</p>
        </div>
      </section>

      {/* Notice Board & Events Ticker */}
      <div className="bg-white border-b border-stone-100 shadow-sm relative z-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="bg-secondary text-primary px-6 py-4 font-black whitespace-nowrap flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
            <span className="animate-pulse w-2.5 h-2.5 bg-primary rounded-full"></span> Latest News
          </div>
          <div className="flex-1 overflow-hidden py-4 px-4 relative flex items-center bg-stone-50 md:bg-white">
            <div className="whitespace-nowrap animate-marquee inline-block">
              {notices.slice(0, 5).map((n) => (
                <span key={n.id} className="mr-16 text-sm text-primary font-bold">
                  <span className="text-accent font-black mr-2">[{n.date}]</span> {n.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <Section id="why-us" light>
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Institutional Excellence</h2>
            <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {[
            { icon: Users, title: "Expert Faculty", desc: "Highly qualified and dedicated teachers." },
            { icon: Trophy, title: "Sports Excellence", desc: "Focus on physical fitness and sportsmanship." },
            { icon: GraduationCap, title: "Holistic Growth", desc: "Academics balanced with co-curriculars." },
            { icon: MapPin, title: "Safe Campus", desc: "CCTV surveillance and secure transport." },
            { icon: BookOpen, title: "Digital Learning", desc: "Smart labs and modern teaching aids." },
            { icon: Users, title: "Parent Connect", desc: "Regular updates and PTMs." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center group border border-stone-100">
              <div className="w-20 h-20 bg-stone-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-primary group-hover:bg-primary group-hover:text-secondary transition-all duration-500 shadow-sm">
                <item.icon size={40} />
              </div>
              <h4 className="font-black text-xl mb-4 text-primary uppercase tracking-tight">{item.title}</h4>
              <p className="text-sm text-stone-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Quick Access Grid */}
      <Section id="quick-access">
        <div className="grid md:grid-cols-2 gap-10">
           {/* Notice Board */}
           <div className="bg-white p-10 rounded-3xl shadow-2xl border border-stone-100">
             <div className="flex justify-between items-center mb-8 border-b border-stone-100 pb-5">
               <h3 className="font-serif font-bold text-3xl text-primary">Notice Board</h3>
               <Link to="/downloads" className="text-xs text-secondary font-black uppercase tracking-[0.2em] hover:text-primary transition-colors">View All</Link>
             </div>
             <div className="space-y-6 max-h-80 overflow-y-auto pr-4 custom-scrollbar">
               {notices.map(notice => (
                 <div key={notice.id} className="border-b border-stone-50 pb-5 last:border-0 hover:bg-stone-50 p-4 rounded-2xl transition-all duration-300">
                   <p className="text-[11px] text-accent font-black mb-1.5 uppercase tracking-widest">{notice.date} • {notice.category}</p>
                   <p className="text-base font-bold text-primary leading-snug">{notice.title}</p>
                 </div>
               ))}
               {notices.length === 0 && <p className="text-stone-400 text-sm italic">No notices available.</p>}
             </div>
           </div>

           {/* Upcoming Events */}
           <div className="bg-white p-10 rounded-3xl shadow-2xl border border-stone-100">
              <div className="flex justify-between items-center mb-8 border-b border-stone-100 pb-5">
               <h3 className="font-serif font-bold text-3xl text-primary">Academic Events</h3>
               <Calendar size={28} className="text-secondary" />
             </div>
             <div className="space-y-6">
                {events.slice(0, 3).map(evt => (
                  <div key={evt.id} className="flex gap-6 items-center p-4 hover:bg-stone-50 rounded-2xl transition-all duration-300">
                    <div className="bg-primary text-secondary p-4 rounded-2xl text-center min-w-[80px] shadow-lg">
                       <span className="block text-xs font-black uppercase tracking-widest mb-1">{new Date(evt.date).toLocaleString('default', { month: 'short' })}</span>
                       <span className="block text-3xl font-black">{new Date(evt.date).getDate()}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-primary uppercase tracking-tight">{evt.title}</h4>
                      <p className="text-sm text-stone-400 mt-1 font-bold">{evt.time} | {evt.location}</p>
                    </div>
                  </div>
                ))}
                {events.length === 0 && <p className="text-stone-400 text-sm italic">No upcoming events.</p>}
                <div className="pt-6">
                    <Link to="#" className="text-sm text-secondary font-black flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-[0.2em]">Full Calendar <ChevronRight size={18} /></Link>
                </div>
             </div>
           </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;