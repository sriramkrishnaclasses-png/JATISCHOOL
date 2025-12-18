import React from 'react';
import { useSchoolStore } from '../context/SchoolContext';
import Section from '../components/Section';
import { Download, FileText, ExternalLink } from 'lucide-react';

const Downloads: React.FC = () => {
  const { downloads } = useSchoolStore();

  return (
    <div>
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Downloads</h1>
        <p className="text-blue-200">Resources, syllabi, and important documents.</p>
      </div>

      <Section id="downloads-list" light>
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="divide-y divide-gray-100">
                    {downloads.map(dl => (
                        <div key={dl.id} className="p-6 hover:bg-gray-50 transition flex items-center justify-between group">
                            <div className="flex items-start gap-4">
                                <div className="bg-red-50 text-red-500 p-3 rounded-lg group-hover:bg-red-100 transition">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-lg group-hover:text-primary transition">{dl.title}</h4>
                                    <span className="inline-block mt-1 text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                        {dl.category}
                                    </span>
                                </div>
                            </div>
                            <a 
                              href={dl.url} 
                              onClick={(e) => { if(dl.url === '#') e.preventDefault(); }} 
                              className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-primary hover:text-white hover:border-primary transition shadow-sm"
                            >
                                <Download size={16} /> 
                                <span className="hidden md:inline">Download</span>
                            </a>
                        </div>
                    ))}
                    {downloads.length === 0 && <div className="p-10 text-center text-gray-500">No downloadable resources available at the moment.</div>}
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Downloads;