import React from 'react';
import { useSchoolStore } from '../context/SchoolContext';
import Section from '../components/Section';

const About: React.FC = () => {
  const { content } = useSchoolStore();

  return (
    <div>
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <p className="text-blue-200">Building foundations for a brighter tomorrow.</p>
      </div>

      <Section id="philosophy">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Philosophy</h3>
            <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
              {content.aboutText}
            </p>
            <div className="grid gap-4">
               <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
                 <h4 className="font-bold text-primary mb-2 text-lg">Our Vision</h4>
                 <p className="text-gray-700">{content.visionText}</p>
               </div>
               <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-secondary">
                 <h4 className="font-bold text-secondary mb-2 text-lg">Our Mission</h4>
                 <p className="text-gray-700">{content.missionText}</p>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="https://picsum.photos/400/500?random=10" alt="Students" className="rounded-lg shadow-lg w-full h-full object-cover mt-8" />
             <img src="https://picsum.photos/400/500?random=11" alt="School" className="rounded-lg shadow-lg w-full h-full object-cover mb-8" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;