import React, { useState } from 'react';
import { useSchoolStore } from '../context/SchoolContext';
import { Users, Trophy, GraduationCap, MapPin, BookOpen, Calendar, ChevronRight } from 'lucide-react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { notices, events } = useSchoolStore();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    { name: "S. K. Mishra", role: "Parent of Class 8 Student", text: "Jati International School has transformed my son's personality. The teachers are incredibly supportive." },
    { name: "Priya Das", role: "Student, Class 10", text: "The science labs are amazing. I love the practical approach to learning here." },
    { name: "Dr. R. Mohanty", role: "Parent of Class 3 Student", text: "Best school in Cuttack district. Safety and discipline are top-notch." },
  ];

  return (
    <div className="font-sans text-gray-800">
      
      {/* Hero Section with Centered Branding */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden bg-stone-900">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?q=80&w=1920&auto=format&fit=crop" 
            alt="Students learning in nature" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/90 via-stone-900/60 to-stone-900/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto text-center py-20">
          <div className="mb-8 animate-fadeIn">
            <img src="/logo.png" alt="Jati International School Crest" className="h-32 md:h-40 w-auto mx-auto drop-shadow-2xl" />
          </div>

          <p className="text-xs md:text-sm text-yellow-100/90 tracking-[0.2em] uppercase mb-6 font-medium border-b border-yellow-100/20 pb-2 inline-block">
            Nursery to Class V | Gurukul-Inspired • Value-Based
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6 leading-[1.15] drop-shadow-lg max-w-5xl mx-auto">
            Education that Shapes <br className="hidden md:block" />
            <span className="text-yellow-50">Character & Clarity</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light mx-auto">
            Blending timeless Gurukul values with a strong CBSE-aligned foundation to nurture disciplined and confident learners.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/admissions" 
              className="bg-emerald-900 hover:bg-emerald-800 text-white px-10 py-4 rounded-lg font-bold tracking-wide shadow-lg transition-all uppercase text-xs border border-emerald-800/50"
            >
              Apply Now
            </Link>
            <Link 
              to="/downloads" 
              className="bg-white/10 border border-yellow-100/60 text-yellow-50 hover:bg-white/20 px-10 py-4 rounded-lg font-bold tracking-wide transition-all uppercase text-xs backdrop-blur-sm"
            >
              Prospectus
            </Link>
          </div>
        </div>

        {/* Tagline Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center opacity-60 pointer-events-none">
          <p className="text-xs md:text-sm font-serif italic text-yellow-100/80 tracking-[0.4em] uppercase">Realisation of Self</p>
        </div>
      </section>

      {/* Notice Board & Events Ticker */}
      <div className="bg-white border-b border-gray-100 shadow-sm relative z-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="bg-secondary text-white px-4 py-3 font-bold whitespace-nowrap flex items-center gap-2 text-sm md:text-base">
            <span className="animate-pulse w-2 h-2 bg-white rounded-full"></span> Latest Updates
          </div>
          <div className="flex-1 overflow-hidden py-3 px-4 relative flex items-center bg-gray-50 md:bg-white">
            <div className="whitespace-nowrap animate-marquee inline-block">
              {notices.slice(0, 5).map((n) => (
                <span key={n.id} className="mr-8 text-sm text-gray-700">
                  <span className="font-bold text-primary">[{n.date}]</span> {n.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <Section id="why-us" light>
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Users, title: "Expert Faculty", desc: "Highly qualified and dedicated teachers." },
            { icon: Trophy, title: "Sports Excellence", desc: "Focus on physical fitness and sportsmanship." },
            { icon: GraduationCap, title: "Holistic Growth", desc: "Academics balanced with co-curriculars." },
            { icon: MapPin, title: "Safe Campus", desc: "CCTV surveillance and secure transport." },
            { icon: BookOpen, title: "Digital Learning", desc: "Smart labs and modern teaching aids." },
            { icon: Users, title: "Parent Connect", desc: "Regular updates and PTMs." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center group border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-white transition">
                <item.icon size={32} />
              </div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Quick Access Grid */}
      <Section id="quick-access">
        <div className="grid md:grid-cols-2 gap-8">
           {/* Notice Board */}
           <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
             <div className="flex justify-between items-center mb-4 border-b pb-2">
               <h3 className="font-bold text-xl text-primary">Notice Board</h3>
               <Link to="/downloads" className="text-xs text-secondary hover:underline">View All</Link>
             </div>
             <div className="space-y-4 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
               {notices.map(notice => (
                 <div key={notice.id} className="border-b border-gray-50 pb-2 last:border-0 hover:bg-gray-50 p-2 rounded transition">
                   <p className="text-xs text-gray-400 font-semibold mb-1">{notice.date} • {notice.category}</p>
                   <p className="text-sm font-medium text-gray-800">{notice.title}</p>
                 </div>
               ))}
               {notices.length === 0 && <p className="text-gray-500 text-sm">No notices available.</p>}
             </div>
           </div>

           {/* Upcoming Events */}
           <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex justify-between items-center mb-4 border-b pb-2">
               <h3 className="font-bold text-xl text-primary">Upcoming Events</h3>
               <Calendar size={18} className="text-secondary" />
             </div>
             <div className="space-y-4">
                {events.slice(0, 3).map(evt => (
                  <div key={evt.id} className="flex gap-3 items-center p-2 hover:bg-gray-50 rounded transition">
                    <div className="bg-blue-50 text-blue-800 p-2 rounded text-center min-w-[50px]">
                       <span className="block text-xs font-bold uppercase">{new Date(evt.date).toLocaleString('default', { month: 'short' })}</span>
                       <span className="block text-lg font-bold">{new Date(evt.date).getDate()}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">{evt.title}</h4>
                      <p className="text-xs text-gray-500">{evt.time} | {evt.location}</p>
                    </div>
                  </div>
                ))}
                {events.length === 0 && <p className="text-gray-500 text-sm">No upcoming events.</p>}
                <div className="pt-2">
                    <Link to="#" className="text-sm text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">View Full Calendar <ChevronRight size={14} /></Link>
                </div>
             </div>
           </div>
        </div>
      </Section>

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
    </div>
  );
};

export default Home;