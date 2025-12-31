import React from 'react';
import Section from '../components/Section';
import { Award, CheckCircle, BookOpen, ShieldCheck, Info, FileCheck, Phone } from 'lucide-react';

const CBSEAffiliation: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-stone-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523050335392-93851179428c?q=80&w=1000')] bg-cover bg-center"></div>
        <div className="relative z-10 container mx-auto px-4">
          <Award className="mx-auto mb-4 text-yellow-100/60" size={48} />
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">CBSE Affiliation Status</h1>
          <p className="text-stone-300 max-w-2xl mx-auto uppercase tracking-widest text-xs font-sans">
            Commitment to Excellence & National Standards
          </p>
        </div>
      </div>

      <Section id="affiliation-content" className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-stone-100">
            <h2 className="text-3xl font-serif text-stone-800 mb-8 border-b pb-4">Jati International School</h2>
            
            <p className="text-stone-600 leading-relaxed mb-10 text-lg italic">
              Jati International School is committed to providing quality education aligned with national educational standards and the vision of NEP 2020. The school follows the curriculum framework prescribed by the Central Board of Secondary Education (CBSE) and is in the process of fulfilling all requirements for affiliation.
            </p>

            <div className="space-y-12">
              {/* 1. Affiliation Status */}
              <section className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-6 font-sans uppercase tracking-tight">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm">1</span>
                  Affiliation Status
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="font-bold text-stone-700">Board</span>
                    <span className="text-stone-600">Central Board of Secondary Education (CBSE)</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="font-bold text-stone-700">Affiliation Status</span>
                    <span className="text-emerald-700 font-bold">Proposed / To be Applied</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="font-bold text-stone-700">Affiliation Number</span>
                    <span className="text-stone-400 italic">Not yet allotted</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="font-bold text-stone-700">Type of School</span>
                    <span className="text-stone-600">Co-Educational</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="font-bold text-stone-700">Classes Offered</span>
                    <span className="text-stone-600">Nursery to Std V</span>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-stone-500 italic">
                  *The affiliation number and details will be updated on this page immediately after approval by CBSE.
                </p>
              </section>

              {/* 2. Compliance with CBSE & NEP 2020 Guidelines */}
              <section>
                <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4 font-sans uppercase tracking-tight">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm">2</span>
                  Compliance & Guidelines
                </h3>
                <p className="text-stone-600 mb-4">Jati International School adheres to the norms laid down by CBSE and NEP 2020:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Child-centric and activity-based learning",
                    "Holistic development approach",
                    "Emphasis on values and character",
                    "Safe and inclusive environment",
                    "Qualified teaching staff"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-stone-600 text-sm">
                      <CheckCircle className="text-emerald-500 shrink-0" size={16} />
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. Curriculum and Academic Framework */}
              <section>
                <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4 font-sans uppercase tracking-tight">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm">3</span>
                  Academic Framework
                </h3>
                <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
                  <ul className="space-y-3 text-stone-700 text-sm">
                    <li className="flex gap-2 font-medium"><BookOpen className="text-emerald-700 shrink-0" size={18} /> Curriculum aligned with CBSE framework and NEP 2020</li>
                    <li className="flex gap-2 font-medium"><BookOpen className="text-emerald-700 shrink-0" size={18} /> Focus on conceptual clarity and experiential learning</li>
                    <li className="flex gap-2 font-medium"><BookOpen className="text-emerald-700 shrink-0" size={18} /> Integration of co-curricular and life-skill activities</li>
                    <li className="flex gap-2 font-medium"><BookOpen className="text-emerald-700 shrink-0" size={18} /> Continuous and comprehensive assessment approach</li>
                  </ul>
                </div>
              </section>

              {/* 4. Infrastructure and Safety Compliance */}
              <section>
                <h3 className="flex items-center gap-3 text-xl font-bold text-stone-800 mb-4 font-sans uppercase tracking-tight">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm">4</span>
                  Infrastructure & Safety
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The school is committed to maintaining standards as required by CBSE, including adequate classroom space, ventilation, safe drinking water, fire safety, and child-friendly learning spaces. Relevant certificates are available under our Mandatory Disclosure section.
                </p>
              </section>

              {/* 6. Important Declaration */}
              <section className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h3 className="flex items-center gap-3 text-xl font-bold text-red-800 mb-3 font-sans uppercase tracking-tight">
                  <ShieldCheck size={20} />
                  Important Declaration
                </h3>
                <p className="text-red-700 text-sm font-medium leading-relaxed">
                  Jati International School does NOT claim CBSE affiliation until formally granted by the Central Board of Secondary Education. All information related to affiliation status is presented honestly and transparently to our parents and stakeholders.
                </p>
              </section>

              {/* 7. Contact Information */}
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

export default CBSEAffiliation;