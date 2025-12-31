import React, { useState } from 'react';
import Section from '../components/Section';
import { useSchoolStore } from '../context/SchoolContext';
import { Send, CheckCircle, Info, Mail, Phone, User } from 'lucide-react';

const Admissions: React.FC = () => {
  const { downloads, addEnquiry } = useSchoolStore();
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
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-primary text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1523050335392-93851179428c?q=80&w=1000')] bg-cover bg-center"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions 2026-27</h1>
          <p className="text-blue-100 max-w-2xl mx-auto px-4 uppercase tracking-widest text-xs font-semibold">
            Nurturing Excellence, character, and discipline
          </p>
        </div>
      </div>

      <Section id="process">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Column 1: Admission Process */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center gap-2">
              <Info className="text-primary" size={24} />
              Admission Process
            </h3>
            <div className="space-y-8 border-l-2 border-primary/20 pl-8 relative ml-4">
               {[
                 { step: "1", title: "Enquiry", desc: "Visit our campus or fill out the enquiry form to initiate the process." },
                 { step: "2", title: "Registration", desc: "Obtain the admission kit and submit the completed registration form." },
                 { step: "3", title: "Assessment", desc: "Interactive session for early years; written assessment for primary students." },
                 { step: "4", title: "Verification", desc: "Submit required documents including TC, Birth Certificate, and Aadhar." },
                 { step: "5", title: "Confirmation", desc: "Complete the fee formalities to secure your child's seat." }
               ].map((s, i) => (
                 <div key={i} className="relative">
                   <div className="absolute -left-[45px] w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-primary/20">
                     {s.step}
                   </div>
                   <h4 className="font-bold text-lg text-primary">{s.title}</h4>
                   <p className="text-gray-600 text-sm mt-1 leading-relaxed">{s.desc}</p>
                 </div>
               ))}
            </div>
            <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <p className="text-sm text-gray-500 mb-4">Prefer offline application?</p>
                <a 
                  href={applicationForm?.url || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-gray-100 hover:bg-gray-200 text-primary px-6 py-3 rounded-xl font-bold transition flex items-center justify-center gap-2 border border-gray-200"
                >
                  Download Application Form
                </a>
            </div>
          </div>
          
          {/* Column 2: Fee Structure */}
          <div className="lg:col-span-1">
             <div className="bg-white p-6 md:p-8 shadow-xl rounded-2xl border border-gray-100 ring-1 ring-gray-200/50">
                <h3 className="text-xl font-bold mb-6 text-center text-primary">Fee Structure (2026-27)</h3>
                <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                    <thead className="bg-primary text-white">
                    <tr>
                        <th className="p-3 border border-blue-800 rounded-tl-lg">Class</th>
                        <th className="p-3 border border-blue-800">Event+Exam</th>
                        <th className="p-3 border border-blue-800 rounded-tr-lg">Monthly</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y text-gray-700">
                      {feeData.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="p-3 border font-medium">{row.class}</td>
                          <td className="p-3 border bg-yellow-50/30">₹{row.eventExam}</td>
                          <td className="p-3 border font-bold text-emerald-700">₹{row.monthly}</td>
                        </tr>
                      ))}
                    </tbody>
                </table>
                </div>
                <div className="mt-6 bg-blue-50 p-4 rounded-xl text-xs text-blue-800 space-y-2 border border-blue-100">
                    <p className="font-bold uppercase tracking-wider text-[10px]">Admission Notice:</p>
                    <p>• Admission fee is completely waived (₹0) for the current session.</p>
                    <p>• Annual charges (Event+Exam) are collected at the session start.</p>
                    <p>• Books and transport are charged extra as per actuals.</p>
                </div>
            </div>
          </div>

          {/* Column 3: Admission Enquiry Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Admission Enquiry</h3>
              <p className="text-gray-500 text-sm mb-8">Reach out for personalized assistance.</p>
              
              {formStatus === 'success' ? (
                <div className="py-12 text-center animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-emerald-500/20">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Enquiry Sent!</h4>
                  <p className="text-gray-500 text-sm">Our admissions coordinator will contact you shortly to guide you further.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 text-primary font-bold text-sm hover:underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Student Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Rahul Sharma" 
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition"
                        value={enquiryForm.name}
                        onChange={e => setEnquiryForm({...enquiryForm, name: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Parent Phone</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input 
                        required
                        type="tel" 
                        placeholder="9937033007" 
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition"
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
                        placeholder="parent@example.com" 
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition"
                        value={enquiryForm.email}
                        onChange={e => setEnquiryForm({...enquiryForm, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Class Interested</label>
                    <select 
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition text-gray-600 appearance-none"
                      value={enquiryForm.classInterested}
                      onChange={e => setEnquiryForm({...enquiryForm, classInterested: e.target.value})}
                    >
                      <option value="">Select Class</option>
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
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Questions (Optional)</label>
                    <textarea 
                      placeholder="Your message here..." 
                      rows={3} 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition"
                      value={enquiryForm.message}
                      onChange={e => setEnquiryForm({...enquiryForm, message: e.target.value})}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={formStatus !== 'idle'}
                    className={`w-full py-4 rounded-xl font-bold text-white transition shadow-lg flex items-center justify-center gap-2 ${formStatus === 'submitting' ? 'bg-primary/70' : 'bg-primary hover:bg-blue-800 shadow-primary/20'}`}
                  >
                    {formStatus === 'submitting' ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
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