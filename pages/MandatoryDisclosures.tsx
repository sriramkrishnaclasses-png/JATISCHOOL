import React from 'react';
import Section from '../components/Section';
import { ClipboardList, Info, Building, Users, BookOpen, HardHat, FileCheck } from 'lucide-react';

const MandatoryDisclosures: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-stone-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000')] bg-cover bg-center"></div>
        <div className="relative z-10 container mx-auto px-4">
          <ClipboardList className="mx-auto mb-4 text-yellow-100/60" size={48} />
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">Mandatory Public Disclosure</h1>
          <p className="text-stone-300 max-w-2xl mx-auto uppercase tracking-widest text-xs font-sans">
            As per Central Board of Secondary Education Guidelines
          </p>
        </div>
      </div>

      <Section id="disclosure-content" className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 md:p-12 shadow-sm border border-stone-100">
            <h2 className="text-3xl font-serif text-stone-800 mb-8 border-b pb-4">Jati International School</h2>

            <div className="space-y-16">
              {/* A. General Information */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Info className="text-emerald-700" size={24} />
                  <h3 className="text-xl font-bold text-stone-800 uppercase tracking-tight">A. General Information</h3>
                </div>
                <div className="overflow-x-auto rounded-xl border border-stone-100">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-stone-50 text-stone-700">
                      <tr>
                        <th className="p-4 border-b border-stone-100 font-bold w-16">Sl. No.</th>
                        <th className="p-4 border-b border-stone-100 font-bold">Information</th>
                        <th className="p-4 border-b border-stone-100 font-bold">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-50 text-stone-600">
                      <tr><td className="p-4">1</td><td className="p-4 font-semibold">Name of the School</td><td className="p-4">Jati International School</td></tr>
                      <tr><td className="p-4">2</td><td className="p-4 font-semibold">Address</td><td className="p-4">Sapanpur, Salepur, Cuttack, Odisha</td></tr>
                      <tr><td className="p-4">3</td><td className="p-4 font-semibold">Pin Code</td><td className="p-4">754202</td></tr>
                      <tr><td className="p-4">4</td><td className="p-4 font-semibold">Phone Number</td><td className="p-4">9937033007</td></tr>
                      <tr><td className="p-4">5</td><td className="p-4 font-semibold">Email ID</td><td className="p-4">info@jatiinternationalschool.com</td></tr>
                      <tr><td className="p-4">6</td><td className="p-4 font-semibold">Website</td><td className="p-4 text-emerald-700">www.jatiinternationalschool.com</td></tr>
                      <tr><td className="p-4">7</td><td className="p-4 font-semibold">Year of Establishment</td><td className="p-4">2025</td></tr>
                      <tr><td className="p-4">8</td><td className="p-4 font-semibold">School Type</td><td className="p-4">Co-Educational</td></tr>
                      <tr><td className="p-4">9</td><td className="p-4 font-semibold text-red-700">Affiliation Status</td><td className="p-4 font-bold text-red-700">Not yet affiliated / Proposed CBSE Affiliation</td></tr>
                      <tr><td className="p-4">10</td><td className="p-4 font-semibold">Board</td><td className="p-4">CBSE (Proposed)</td></tr>
                      <tr><td className="p-4">11</td><td className="p-4 font-semibold">Classes Offered</td><td className="p-4">Nursery to Std V</td></tr>
                      <tr><td className="p-4">12</td><td className="p-4 font-semibold">Medium of Instruction</td><td className="p-4">English</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* B. Trust / Society / Management */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Building className="text-emerald-700" size={24} />
                  <h3 className="text-xl font-bold text-stone-800 uppercase tracking-tight">B. Trust / Society / Management</h3>
                </div>
                <div className="overflow-x-auto rounded-xl border border-stone-100">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-stone-50 text-stone-700">
                      <tr>
                        <th className="p-4 border-b border-stone-100 font-bold w-16">Sl. No.</th>
                        <th className="p-4 border-b border-stone-100 font-bold">Information</th>
                        <th className="p-4 border-b border-stone-100 font-bold">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-50 text-stone-600">
                      <tr><td className="p-4">1</td><td className="p-4 font-semibold">Name of Trust / Society</td><td className="p-4">Jati Welfare Foundation</td></tr>
                      <tr><td className="p-4">2</td><td className="p-4 font-semibold">Registration Number</td><td className="p-4">40472503851</td></tr>
                      <tr><td className="p-4">3</td><td className="p-4 font-semibold">Registration Date</td><td className="p-4">01.11.2025</td></tr>
                      <tr><td className="p-4">4</td><td className="p-4 font-semibold">Registered Office Address</td><td className="p-4">Alipur, Mahasinghpur, Cuttack, 754200</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* C. Documents and Certificates */}
              <section className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
                <div className="flex items-center gap-3 mb-6">
                  <FileCheck className="text-emerald-700" size={24} />
                  <h3 className="text-xl font-bold text-stone-800 uppercase tracking-tight">C. Documents and Certificates</h3>
                </div>
                <p className="text-stone-500 text-sm mb-6 italic">Scanned copies will be uploaded here once issued and applicable.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Trust / Society Registration Certificate",
                    "State Government NOC (if applicable)",
                    "Recognition Certificate",
                    "Fire Safety Certificate",
                    "Building Safety Certificate",
                    "Water, Health & Sanitation Certificate",
                    "DEO / Local Authority Approval"
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-stone-200 text-stone-600 text-sm">
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                      {doc}
                    </div>
                  ))}
                </div>
              </section>

              {/* D. Academic Information */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="text-emerald-700" size={24} />
                  <h3 className="text-xl font-bold text-stone-800 uppercase tracking-tight">D. Academic Information</h3>
                </div>
                <div className="overflow-x-auto rounded-xl border border-stone-100">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-stone-50 text-stone-700">
                      <tr>
                        <th className="p-4 border-b border-stone-100 font-bold w-16">Sl. No.</th>
                        <th className="p-4 border-b border-stone-100 font-bold">Information</th>
                        <th className="p-4 border-b border-stone-100 font-bold">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-50 text-stone-600">
                      <tr><td className="p-4">1</td><td className="p-4 font-semibold">Curriculum</td><td className="p-4">CBSE aligned with NEP 2020</td></tr>
                      <tr><td className="p-4">2</td><td className="p-4 font-semibold">Academic Session</td><td className="p-4">April to March</td></tr>
                      <tr><td className="p-4">3</td><td className="p-4 font-semibold">Teaching Methodology</td><td className="p-4">Activity-based, experiential learning</td></tr>
                      <tr><td className="p-4">4</td><td className="p-4 font-semibold">Assessment System</td><td className="p-4">Continuous & holistic evaluation</td></tr>
                      <tr><td className="p-4">5</td><td className="p-4 font-semibold">Co-Curricular Activities</td><td className="p-4">Yoga, Dance, Music, Art, Public Speaking, Martial Arts</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* E & F Grid */}
              <div className="grid md:grid-cols-2 gap-12">
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="text-emerald-700" size={24} />
                    <h3 className="text-xl font-bold text-stone-800 uppercase tracking-tight">E. Staff Details</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 border-b border-stone-100 text-sm">
                      <span className="font-semibold text-stone-700">Principal</span>
                      <span className="text-stone-600">[Name – To be updated]</span>
                    </div>
                    <div className="flex justify-between p-3 border-b border-stone-100 text-sm">
                      <span className="font-semibold text-stone-700">Teachers</span>
                      <span className="text-stone-600">Qualified as per CBSE norms</span>
                    </div>
                    <div className="flex justify-between p-3 border-b border-stone-100 text-sm">
                      <span className="font-semibold text-stone-700">Student-Teacher Ratio</span>
                      <span className="text-stone-600">Maintained as per guidelines</span>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <HardHat className="text-emerald-700" size={24} />
                    <h3 className="text-xl font-bold text-stone-800 uppercase tracking-tight">F. Infrastructure</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 border-b border-stone-100 text-sm">
                      <span className="font-semibold text-stone-700">Campus Area</span>
                      <span className="text-stone-600">[To be updated]</span>
                    </div>
                    <div className="flex justify-between p-3 border-b border-stone-100 text-sm">
                      <span className="font-semibold text-stone-700">Classrooms</span>
                      <span className="text-stone-600">Well-ventilated & child-friendly</span>
                    </div>
                    <div className="flex justify-between p-3 border-b border-stone-100 text-sm">
                      <span className="font-semibold text-stone-700">Drinking Water</span>
                      <span className="text-stone-600">Safe & hygienic (RO)</span>
                    </div>
                  </div>
                </section>
              </div>

              {/* H. Compliance Declaration */}
              <section className="bg-emerald-900 text-white p-8 md:p-10 rounded-2xl shadow-xl border border-emerald-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif mb-4">Compliance Declaration</h3>
                  <p className="text-emerald-100 leading-relaxed text-sm mb-6">
                    The school declares that the information provided above is true and correct to the best of our knowledge. The school undertakes to comply with all norms, guidelines, and directions issued by CBSE and other competent authorities.
                  </p>
                  <div className="p-4 bg-emerald-800/50 rounded-lg text-xs italic border border-emerald-700">
                    * This page will be updated regularly as per CBSE requirements. CBSE affiliation status will be updated immediately upon approval.
                  </div>
                </div>
              </section>

              {/* Contact Info Footer */}
              <section className="text-center pt-8 border-t border-stone-100">
                <div className="space-y-1 text-stone-600 font-sans text-sm">
                  <p className="font-bold text-stone-800 text-base">Jati International School</p>
                  <p>Sapanpur, Salepur, Cuttack, Odisha</p>
                  <p>📞 9937033007 | 🌐 www.jatiinternationalschool.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MandatoryDisclosures;