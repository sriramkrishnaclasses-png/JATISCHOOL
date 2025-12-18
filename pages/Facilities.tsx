import React from 'react';
import { useSchoolStore } from '../context/SchoolContext';
import Section from '../components/Section';

const Facilities: React.FC = () => {
    const { content } = useSchoolStore();

  return (
    <div>
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Campus Facilities</h1>
        <p className="text-blue-200">Infrastructure that enables learning.</p>
      </div>

      <Section id="facilities-intro" light>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12 text-lg">
            {content.facilitiesText}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
              { name: 'Smart Classrooms', desc: 'All classrooms are equipped with digital boards and projectors for interactive learning.', img: 'https://picsum.photos/400/300?random=20' },
              { name: 'Science Labs', desc: 'Separate well-stocked laboratories for Physics, Chemistry, and Biology.', img: 'https://picsum.photos/400/300?random=21' },
              { name: 'Library', desc: 'A vast collection of books, journals, and digital resources to encourage reading habits.', img: 'https://picsum.photos/400/300?random=22' },
              { name: 'Computer Lab', desc: 'Modern computer lab with high-speed internet and latest software for IT education.', img: 'https://picsum.photos/400/300?random=23' },
              { name: 'Transport', desc: 'Safe and secure bus facility covering all major routes in Salipur and Cuttack.', img: 'https://picsum.photos/400/300?random=24' },
              { name: 'Sports Complex', desc: 'Playgrounds for Cricket, Football, and courts for Badminton and Volleyball.', img: 'https://picsum.photos/400/300?random=25' },
              { name: 'CCTV Security', desc: '24x7 surveillance of the entire campus to ensure student safety.', img: 'https://picsum.photos/400/300?random=26' },
              { name: 'Auditorium', desc: 'Spacious auditorium for cultural events, seminars, and assemblies.', img: 'https://picsum.photos/400/300?random=27' }
          ].map((fac, idx) => (
             <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
               <div className="h-48 overflow-hidden">
                   <img src={fac.img} alt={fac.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
               </div>
               <div className="p-6">
                 <h3 className="font-bold text-lg text-primary mb-2">{fac.name}</h3>
                 <p className="text-gray-600 text-sm">{fac.desc}</p>
               </div>
             </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Facilities;