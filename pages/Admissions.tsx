import React from 'react';
import Section from '../components/Section';

const Admissions: React.FC = () => {
  return (
    <div>
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Admissions</h1>
        <p className="text-blue-200">Join our family today.</p>
      </div>

      <Section id="process">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Admission Process</h3>
            <div className="space-y-8 border-l-2 border-gray-200 pl-8 relative">
               {[
                 { step: "1", title: "Enquiry", desc: "Visit the school campus or fill the online enquiry form to get details." },
                 { step: "2", title: "Registration", desc: "Purchase the admission kit and fill the application form." },
                 { step: "3", title: "Interaction / Assessment", desc: "Student interaction for Pre-Primary; Written assessment for higher classes." },
                 { step: "4", title: "Document Verification", desc: "Submit TC, Birth Certificate, Aadhar and other documents." },
                 { step: "5", title: "Fee Payment", desc: "Pay the admission fees to confirm the seat." }
               ].map((s, i) => (
                 <div key={i} className="relative">
                   <div className="absolute -left-[42px] w-8 h-8 rounded-full bg-secondary border-4 border-white flex items-center justify-center text-white text-xs font-bold">
                     {s.step}
                   </div>
                   <h4 className="font-bold text-lg text-primary">{s.title}</h4>
                   <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
                 </div>
               ))}
            </div>
            <div className="mt-10">
                <button className="bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-md font-bold shadow-lg transition">Download Application Form</button>
            </div>
          </div>
          
          <div>
             <div className="bg-white p-6 md:p-8 shadow-xl rounded-xl border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold mb-6 text-center">Fee Structure (Session 2025-26)</h3>
                <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="p-3 rounded-tl">Class</th>
                        <th className="p-3">Admission Fee (One Time)</th>
                        <th className="p-3 rounded-tr">Tuition Fee (Monthly)</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y text-gray-600">
                    <tr><td className="p-3 font-medium">Nursery - UKG</td><td className="p-3">₹10,000</td><td className="p-3">₹1,500</td></tr>
                    <tr><td className="p-3 font-medium">Std I - V</td><td className="p-3">₹12,000</td><td className="p-3">₹1,800</td></tr>
                    <tr><td className="p-3 font-medium">Std VI - VIII</td><td className="p-3">₹15,000</td><td className="p-3">₹2,200</td></tr>
                    <tr><td className="p-3 font-medium">Std IX - X</td><td className="p-3">₹18,000</td><td className="p-3">₹2,500</td></tr>
                    </tbody>
                </table>
                </div>
                <div className="mt-6 bg-blue-50 p-4 rounded text-xs text-gray-600 space-y-2">
                    <p className="font-bold text-blue-800">Note:</p>
                    <p>• Admission fee is non-refundable.</p>
                    <p>• Transport charges vary based on distance (Range: ₹800 - ₹1500).</p>
                    <p>• Uniform and Books are to be purchased separately.</p>
                </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Admissions;