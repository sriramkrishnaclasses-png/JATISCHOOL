import React, { useState } from 'react';
import { useSchoolStore } from '../context/SchoolContext';
import Section from '../components/Section';

const Academics: React.FC = () => {
  const { content } = useSchoolStore();
  const [activeTab, setActiveTab] = useState<'pre' | 'primary' | 'secondary'>('primary');

  return (
    <div>
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Academics</h1>
        <p className="text-blue-200">Excellence in every step.</p>
      </div>

      <Section id="academic-overview">
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12 leading-relaxed">
            {content.academicsText}
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
           <button 
             onClick={() => setActiveTab('pre')}
             className={`p-4 rounded-lg font-bold text-lg transition ${activeTab === 'pre' ? 'bg-primary text-white shadow-lg' : 'bg-white border hover:bg-gray-50 text-gray-700'}`}
           >
             Pre-Primary
           </button>
           <button 
             onClick={() => setActiveTab('primary')}
             className={`p-4 rounded-lg font-bold text-lg transition ${activeTab === 'primary' ? 'bg-primary text-white shadow-lg' : 'bg-white border hover:bg-gray-50 text-gray-700'}`}
           >
             Primary Wing
           </button>
           <button 
             onClick={() => setActiveTab('secondary')}
             className={`p-4 rounded-lg font-bold text-lg transition ${activeTab === 'secondary' ? 'bg-primary text-white shadow-lg' : 'bg-white border hover:bg-gray-50 text-gray-700'}`}
           >
             Middle & Secondary
           </button>
        </div>

        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100 min-h-[300px]">
           {activeTab === 'pre' && (
             <div className="animate-fadeIn">
                <h4 className="text-2xl font-bold text-primary mb-4">Pre-Primary Education (Nursery - UKG)</h4>
                <p className="mb-6 text-gray-700 text-lg">Our pre-primary wing focuses on sensory development, motor skills, and social interaction through a fun, play-way methodology. We ensure a safe and nurturing environment for the little ones.</p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h5 className="font-bold text-gray-800 mb-3">Key Highlights</h5>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Phonics and Storytelling sessions</li>
                        <li>Creative Art and Craft</li>
                        <li>Basic Numeracy with tools</li>
                        <li>Doll house and play area</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-800 mb-3">Assessment</h5>
                        <p className="text-gray-600">No formal exams. Continuous comprehensive evaluation through observation and daily activities.</p>
                    </div>
                </div>
             </div>
           )}
           {activeTab === 'primary' && (
             <div className="animate-fadeIn">
                <h4 className="text-2xl font-bold text-primary mb-4">Primary Years (Class I - V)</h4>
                <p className="mb-6 text-gray-700 text-lg">The primary curriculum is designed to build strong foundations in core subjects while encouraging curiosity. We move from concrete to abstract learning concepts gradually.</p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h5 className="font-bold text-gray-800 mb-3">Subjects Offered</h5>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>English, Hindi, Odia (Languages)</li>
                        <li>Mathematics & Environmental Studies</li>
                        <li>Computer Science & GK</li>
                        <li>Value Education, Music, Dance</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-800 mb-3">Methodology</h5>
                        <p className="text-gray-600">Project-based learning, interactive smart classes, and regular field trips to reinforce classroom learning.</p>
                    </div>
                </div>
             </div>
           )}
           {activeTab === 'secondary' && (
             <div className="animate-fadeIn">
                <h4 className="text-2xl font-bold text-primary mb-4">Middle & Secondary (Class VI - X)</h4>
                <p className="mb-6 text-gray-700 text-lg">We follow a rigorous academic curriculum aligned with CBSE standards, preparing students for board examinations and future competitive exams while focusing on character building.</p>
                 <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h5 className="font-bold text-gray-800 mb-3">Core Curriculum</h5>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Mathematics, Science (Physics, Chemistry, Biology)</li>
                        <li>Social Sciences (History, Geography, Civics, Economics)</li>
                        <li>Artificial Intelligence & Information Technology</li>
                        <li>Laboratory Practical Sessions</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-800 mb-3">Co-Scholastic</h5>
                        <p className="text-gray-600">Debates, Olympiads, Sports competitions, and Club activities (Robotics, Eco Club, Heritage Club).</p>
                    </div>
                </div>
             </div>
           )}
        </div>
      </Section>
    </div>
  );
};

export default Academics;