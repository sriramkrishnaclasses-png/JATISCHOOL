import React, { useState } from 'react';
import Section from '../components/Section';
import { useSchoolStore } from '../context/SchoolContext';
import { Send, CheckCircle, Info, Mail, Phone, User } from 'lucide-react';

const Admissions: React.FC = () => {
  const { downloads, addEnquiry, settings } = useSchoolStore();
  const applicationForm = downloads.find(d => d.id === '0');

  // Enquiry Form State
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

  const feeData = [
    { class: "Nursery", admission: "0", eventExam: "1,000", monthly: "500" },
    { class: "KG I", admission: "0", eventExam: "1,000", monthly: "550" },
    { class: "KG II", admission: "0", eventExam: "1,000", monthly: "550" },
    { class: "Std 1", admission: "0", eventExam: "1,100", monthly: "650" },
    { class: "Std 2", admission: "0", eventExam: "1,100", monthly: "700" },
    { class: "Std 3", admission: "0", eventExam: "1,300", monthly: "800" },
    { class: "Std 4", admission: "0", eventExam: "1,300", monthly: "900" },
    { class: "Std 5", admission: "0", eventExam: "1,300", monthly: "1,100" },
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="bg-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1523050335392-93851179428c?q=80&w=1000')] bg-cover bg-center"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Admissions 2026-27</h1>
          <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-secondary max-w-2xl mx-auto px-4 uppercase tracking-[0.3em] text-xs font-bold">
            {settings.tagline}
          </p>
        </div>
      </div>

      <Section id="process">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Column 1: Admission Process */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-8 text-gray-800 flex items-center gap-2">
              <Info className="text-secondary" size={24} />
              The Path to JIS
            </h3>
            <div className="space-y-8 border-l-2 border-secondary/30 pl-8 relative ml-4">
               {[
                 { step: "1", title: "Enquiry", desc: "Start your journey by filling our digital enquiry form." },
                 { step: "2", title: "Registration", desc: "Visit our campus to obtain the registration kit." },
                 { step: "3", title: "Interaction", desc: "Participate in a friendly session for holistic assessment." },
                 { step: "4", title: "Verification", desc: "Submit documentation: Birth Certificate, TC, and Aadhar." },
                 { step: "5", title: "Confirmation", desc: "Secure the seat by fulfilling the admission formalities." }
               ].map((s, i) => (s &&
                 <div key={i} className="relative">
                   <div className="absolute -left-[45px] w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary text-xs font-bold shadow-md">
                     {s.step}
                   </div>
                   <h4 className="font-bold text-lg text-primary">{s.title}</h4>
                   <p className="text-gray-600 text-sm mt-1 leading-relaxed">{s.desc}</p>
                 </div>
               ))}
            </div>
            <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm border border-stone-200 text-center">
                <p className="text-sm text-gray-500 mb-4 italic">Ready to proceed?</p>
                <a 
                  href={applicationForm?.url || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-stone-50 hover:bg-stone-100 text-primary px-6 py-3 rounded-xl font-bold transition flex items-center justify-center gap-2 border border-stone-200"
                >
                  Download Application Form
                </a>
            </div>
          </div>
          
          {/* Column 2: Fee Structure */}
          <div className="lg:col-span-1">
             <div className="bg-white p-6 md:p-8 shadow-xl rounded-2xl border border-stone-100 ring-1 ring-stone-200/50">
                <h3 className="text-xl font-serif font-bold mb-6 text-center text-primary">Academic Investment (2026-27)</h3>
                <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                    <thead className="bg-primary text-white">
                    <tr>
                        <th className="p-3 border border-stone-800 rounded-tl-lg">Class</th>
                        <th className="p-3 border border-stone-800">Annual Charges</th>
                        <th className="p-3 border border-stone-800 rounded-tr-lg">Monthly Fee</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y text-gray-700">
                      {feeData.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                          <td className="p-3 border font-medium">{row.class}</td>
                          <td className="p-3 border text-accent">₹{row.eventExam}</td>
                          <td className="p-3 border font-bold text-primary">₹{row.monthly}</td>
                        </tr>
                      ))}
                    </tbody>
                </table>
                </div>
                <div className="mt-6 bg-accent/5 p-4 rounded-xl text-xs text-accent space-y-2 border border-accent/10">
                    <p className="font-bold uppercase tracking-wider text-[10px]">Admission Notice:</p>
                    <p>• Admission fee is fully waived (₹0) for the current session.</p>
                    <p>• Annual charges (Event+Exam) are collected at the start of the session.</p>
                </div>
            </div>
          </div>

          {/* Column 3: Admission Enquiry Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16"></div>
              
              <h3 className="text-2xl font-serif font-bold mb-2 text-gray-800">Digital Enquiry</h3>
              <p className="text-gray-500 text-sm mb-8">Reach out for personalized counseling.</p>
              
              {formStatus === 'success' ? (
                <div className="py-12 text-center animate-fadeIn">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-secondary shadow-lg">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Enquiry Logged</h4>
                  <p className="text-gray-500 text-sm">Our admissions coordinator will contact you shortly.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 text-primary font-bold text-sm hover:underline"
                  >
                    New Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Student Full Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input 
                        required
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:bg-white transition"
                        value={enquiryForm.name}
                        onChange={e => setEnquiryForm({...enquiryForm, name: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Parent Contact</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input 
                        required
                        type="tel" 
                        placeholder="Phone Number" 
                        className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:bg-white transition"
                        value={enquiryForm.phone}
                        onChange={e => setEnquiryForm({...enquiryForm, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Email Address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input 
                        required
                        type="email" 
                        placeholder="parent@email.com" 
                        className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:bg-white transition"
                        value={enquiryForm.email}
                        onChange={e => setEnquiryForm({...enquiryForm, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Class Sought</label>
                    <select 
                      required
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:bg-white transition text-gray-600 appearance-none"
                      value={enquiryForm.classInterested}
                      onChange={e => setEnquiryForm({...enquiryForm, classInterested: e.target.value})}
                    >
                      <option value="">Select Grade</option>
                      <option value="Nursery">Nursery</option>
                      <option value="KG I">KG I</option>
                      <option value="KG II">KG II</option>
                      <option value="Std 1">Std 1</option>
                      <option value="Std 2">Std 2</option>
                      <option value="Std 3">Std 3</option>
                      <option value="Std 4">Std 4</option>
                      <option value="Std 5">Std 5</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Message (Optional)</label>
                    <textarea 
                      placeholder="Special requirements..." 
                      rows={3} 
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:bg-white transition"
                      value={enquiryForm.message}
                      onChange={e => setEnquiryForm({...enquiryForm, message: e.target.value})}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={formStatus !== 'idle'}
                    className={`w-full py-4 rounded-xl font-bold text-primary transition shadow-lg flex items-center justify-center gap-2 ${formStatus === 'submitting' ? 'bg-secondary/70' : 'bg-secondary hover:bg-secondary/90 shadow-secondary/20'}`}
                  >
                    {formStatus === 'submitting' ? (
                      <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send size={18} /> Submit Enquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Admissions;