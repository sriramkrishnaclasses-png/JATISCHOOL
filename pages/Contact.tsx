import React, { useState } from 'react';
import { useSchoolStore } from '../context/SchoolContext';
import Section from '../components/Section';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const { settings, addEnquiry } = useSchoolStore();
  const [enquiryForm, setEnquiryForm] = useState({ name: '', email: '', phone: '', classInterested: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

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

  return (
    <div>
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-blue-200">Get in touch with us.</p>
      </div>

      <Section id="contact-details">
        <div className="grid md:grid-cols-2 gap-12">
           <div className="space-y-8">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
               <div className="bg-blue-50 p-4 rounded-full text-primary shrink-0"><MapPin size={24} /></div>
               <div>
                 <h4 className="font-bold text-lg mb-1">Our Location</h4>
                 <p className="text-gray-600">{settings.address}</p>
               </div>
             </div>
             
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
               <div className="bg-blue-50 p-4 rounded-full text-primary shrink-0"><Phone size={24} /></div>
               <div>
                 <h4 className="font-bold text-lg mb-1">Call Us</h4>
                 <p className="text-gray-600">{settings.phone}</p>
                 <p className="text-xs text-gray-400 mt-1">Mon - Sat, 8:00 AM - 4:00 PM</p>
               </div>
             </div>

             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
               <div className="bg-blue-50 p-4 rounded-full text-primary shrink-0"><Mail size={24} /></div>
               <div>
                 <h4 className="font-bold text-lg mb-1">Email Us</h4>
                 <p className="text-gray-600">{settings.email}</p>
               </div>
             </div>
             
             {/* Map Placeholder */}
             <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center text-gray-500 shadow-inner">
                <div className="text-center">
                    <MapPin size={40} className="mx-auto mb-2 opacity-20" />
                    <span>Google Map Placeholder</span>
                </div>
             </div>
           </div>

           <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
             <h3 className="text-2xl font-bold mb-2 text-gray-800">Send us a Message</h3>
             <p className="text-gray-500 mb-8">Have a question? Fill the form below.</p>
             
             <form onSubmit={handleEnquirySubmit} className="space-y-5">
               <div className="grid grid-cols-2 gap-5">
                 <input 
                   required
                   type="text" 
                   placeholder="Your Name" 
                   className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:bg-white transition"
                   value={enquiryForm.name}
                   onChange={e => setEnquiryForm({...enquiryForm, name: e.target.value})}
                 />
                 <input 
                   required
                   type="tel" 
                   placeholder="Phone Number" 
                   className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:bg-white transition"
                   value={enquiryForm.phone}
                   onChange={e => setEnquiryForm({...enquiryForm, phone: e.target.value})}
                 />
               </div>
               <input 
                 required
                 type="email" 
                 placeholder="Email Address" 
                 className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:bg-white transition"
                 value={enquiryForm.email}
                 onChange={e => setEnquiryForm({...enquiryForm, email: e.target.value})}
               />
               <select 
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:bg-white transition text-gray-600"
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
                 className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:bg-white transition"
                 value={enquiryForm.message}
                 onChange={e => setEnquiryForm({...enquiryForm, message: e.target.value})}
               ></textarea>
               
               <button 
                 type="submit" 
                 disabled={formStatus !== 'idle'}
                 className={`w-full py-3.5 rounded-lg font-bold text-white transition shadow-lg ${formStatus === 'success' ? 'bg-green-600' : 'bg-secondary hover:bg-orange-600 shadow-orange-200'}`}
               >
                 {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Message Sent Successfully!' : 'Submit Enquiry'}
               </button>
             </form>
           </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;