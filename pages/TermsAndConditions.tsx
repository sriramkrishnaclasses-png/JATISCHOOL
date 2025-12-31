import React from 'react';
import Section from '../components/Section';
import { Scale, ShieldAlert, FileText, Gavel, Globe, UserCheck } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-stone-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000')] bg-cover bg-center"></div>
        <div className="relative z-10 container mx-auto px-4">
          <Scale className="mx-auto mb-4 text-yellow-100/60" size={48} />
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">Terms & Conditions</h1>
          <p className="text-stone-300 max-w-2xl mx-auto uppercase tracking-widest text-xs font-sans">
            Governance and Usage Guidelines
          </p>
        </div>
      </div>

      <Section id="terms-content" className="bg-white py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-stone-100">
            <h2 className="text-3xl font-serif text-stone-800 mb-8 border-b pb-4">Jati International School</h2>
            
            <p className="text-stone-600 leading-relaxed mb-10 text-lg italic">
              By accessing and using the website of Jati International School, you agree to comply with the following Terms and Conditions. Please read them carefully to understand your rights and responsibilities.
            </p>

            <div className="space-y-12">
              {/* 1. Website Use */}
              <section>
                <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4 font-sans uppercase tracking-tight">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm">1</span>
                  Website Use
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  This website is intended to provide information about Jati International School, its philosophy, academic programs, admissions, and related activities. The content is for general information purposes only and is intended for use by parents, students, and stakeholders.
                </p>
              </section>

              {/* 2. Accuracy of Information */}
              <section>
                <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4 font-sans uppercase tracking-tight">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm">2</span>
                  Accuracy of Information
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  While we strive to keep all information accurate and up to date, the school does not guarantee the completeness or accuracy of all content at all times. Details related to admissions, fees, curriculum, and activities may be updated without prior notice.
                </p>
              </section>

              {/* 3. Admissions and Enquiries */}
              <section className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4 font-sans uppercase tracking-tight">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm">3</span>
                  Admissions and Enquiries
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Submitting an enquiry or application through the website does not guarantee admission. Admission is subject to the school’s admission policy, availability of seats, and fulfillment of eligibility criteria. All final decisions rest with the school management.
                </p>
              </section>

              {/* 4. Intellectual Property */}
              <section>
                <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4 font-sans uppercase tracking-tight">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm">4</span>
                  Intellectual Property
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  All content on this website, including text, images, logos, graphics, and design, is the property of Jati International School unless otherwise stated. Unauthorized copying, reproduction, or use of website content without written permission is strictly prohibited and may lead to legal action.
                </p>
              </section>

              {/* 5. User Conduct */}
              <section>
                <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4 font-sans uppercase tracking-tight">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm">5</span>
                  User Conduct
                </h3>
                <p className="text-stone-600 mb-4">Users agree not to:</p>
                <ul className="grid md:grid-cols-2 gap-3 text-stone-600 text-sm">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div> Misuse the website or its content</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div> Submit false or misleading information</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div> Attempt to disrupt website functionality</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div> Use for unlawful or harmful purposes</li>
                </ul>
              </section>

              {/* 6. External Links */}
              <section>
                <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4 font-sans uppercase tracking-tight">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm">6</span>
                  External Links
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  The website may contain links to third-party websites for convenience. Jati International School does not control or endorse the content, policies, or practices of external websites and is not responsible for any loss or damage arising from their use.
                </p>
              </section>

              {/* 7 & 8 */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-stone-800 mb-2 font-sans uppercase tracking-tight text-sm">7. Limitation of Liability</h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Jati International School shall not be held responsible for any direct or indirect loss, damage, or inconvenience arising from the use of this website or reliance on information provided.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 mb-2 font-sans uppercase tracking-tight text-sm">8. Privacy</h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    All personal information submitted through the website is governed by our Privacy Policy. By using this website, you consent to the collection and use of information as described therein.
                  </p>
                </div>
              </div>

              {/* 9 & 10 */}
              <div className="grid md:grid-cols-2 gap-8 border-t border-stone-100 pt-8">
                <div>
                  <h3 className="font-bold text-stone-800 mb-2 font-sans uppercase tracking-tight text-sm">9. Changes to Terms</h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    The school reserves the right to modify these Terms and Conditions at any time without prior notice. Continued use of the website signifies acceptance of the updated terms.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 mb-2 font-sans uppercase tracking-tight text-sm">10. Governing Law</h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    These Terms and Conditions are governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of the appropriate courts in Odisha.
                  </p>
                </div>
              </div>

              {/* 11. Contact Information */}
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

export default TermsAndConditions;