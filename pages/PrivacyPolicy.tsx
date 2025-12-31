import React from 'react';
import Section from '../components/Section';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-stone-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000')] bg-cover bg-center"></div>
        <div className="relative z-10 container mx-auto px-4">
          <ShieldCheck className="mx-auto mb-4 text-yellow-100/60" size={48} />
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">Privacy Policy</h1>
          <p className="text-stone-300 max-w-2xl mx-auto uppercase tracking-widest text-xs font-sans">
            Commitment to safeguarding your information
          </p>
        </div>
      </div>

      <Section id="policy-content" className="bg-white py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-stone-100">
            <h2 className="text-3xl font-serif text-stone-800 mb-8 border-b pb-4">Jati International School</h2>
            
            <p className="text-stone-600 leading-relaxed mb-10 text-lg italic">
              At Jati International School, we are committed to safeguarding the privacy of our students, parents, staff, and website visitors. This Privacy Policy explains how information is collected, used, protected, and managed through our official website.
            </p>

            <div className="space-y-12">
              <section>
                <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4 font-sans uppercase tracking-tight">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm">1</span>
                  Information We Collect
                </h3>
                <ul className="grid md:grid-cols-2 gap-4 text-stone-600">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div> Student name, age, class applied for</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div> Parent or guardian name</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div> Contact details (phone/email)</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div> Address and identification details</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div> Communication via forms</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div> Technical device data</li>
                </ul>
              </section>

              <section>
                <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4 font-sans uppercase tracking-tight">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm">2</span>
                  Purpose of Information Collection
                </h3>
                <p className="text-stone-600 mb-4 leading-relaxed">The information collected is used strictly for educational and administrative purposes, including:</p>
                <div className="grid md:grid-cols-2 gap-3 text-stone-600">
                  <div className="p-3 bg-stone-50 rounded-lg">Processing admissions</div>
                  <div className="p-3 bg-stone-50 rounded-lg">Communicating information</div>
                  <div className="p-3 bg-stone-50 rounded-lg">Maintaining school records</div>
                  <div className="p-3 bg-stone-50 rounded-lg">Improving school services</div>
                </div>
                <p className="mt-4 text-sm font-bold text-emerald-700 bg-emerald-50 p-3 rounded border border-emerald-100">
                  Personal information is NOT used for commercial marketing or shared for unrelated purposes.
                </p>
              </section>

              <section className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="flex items-center gap-3 text-lg font-bold text-stone-800 mb-4 font-sans uppercase tracking-tight">
                    <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm text-xs">3</span>
                    Data Protection
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    We follow reasonable security practices to protect personal information from unauthorized access, loss, or misuse. Access is limited to authorized personnel only.
                  </p>
                </div>
                <div>
                  <h3 className="flex items-center gap-3 text-lg font-bold text-stone-800 mb-4 font-sans uppercase tracking-tight">
                    <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm text-xs">4</span>
                    Information Sharing
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    We do not sell, rent, or trade personal information. Disclosure only occurs when required by law or for vital administrative purposes.
                  </p>
                </div>
              </section>

              <section className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4 font-sans uppercase tracking-tight">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm">5</span>
                  Children’s Privacy
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Protecting children’s privacy is of utmost importance. Student information is collected only with the consent of parents or legal guardians. We do not knowingly collect or publish sensitive personal data of children on the website.
                </p>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <section>
                  <h3 className="font-bold text-stone-800 mb-2 font-sans uppercase tracking-tight text-sm">6. Cookies</h3>
                  <p className="text-stone-600 text-sm">We use basic cookies to enhance user experience. You can choose to disable these via browser settings.</p>
                </section>
                <section>
                  <h3 className="font-bold text-stone-800 mb-2 font-sans uppercase tracking-tight text-sm">7. External Links</h3>
                  <p className="text-stone-600 text-sm">We are not responsible for the privacy practices of third-party websites linked on our portal.</p>
                </section>
                <section>
                  <h3 className="font-bold text-stone-800 mb-2 font-sans uppercase tracking-tight text-sm">8. Parental Rights</h3>
                  <p className="text-stone-600 text-sm">Parents may request access to, correction of, or deletion of their child's data subject to policy requirements.</p>
                </section>
                <section>
                  <h3 className="font-bold text-stone-800 mb-2 font-sans uppercase tracking-tight text-sm">9. Updates</h3>
                  <p className="text-stone-600 text-sm">We reserve the right to update this policy. Changes will be published immediately on this page.</p>
                </section>
              </div>

              <section className="mt-12 pt-12 border-t border-stone-100 text-center">
                <h3 className="text-2xl font-serif text-stone-800 mb-6">Contact Information</h3>
                <div className="space-y-2 text-stone-600 font-sans">
                  <p className="font-bold text-stone-800">Jati International School</p>
                  <p>Sapanpur, Salepur, Cuttack, Odisha</p>
                  <p>📞 Contact: 9937033007</p>
                  <p className="text-emerald-700 hover:underline">www.jatiinternationalschool.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;