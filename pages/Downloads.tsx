import React from 'react';
import { useSchoolStore } from '../context/SchoolContext';
import Section from '../components/Section';
import { Download, FileText, Folder } from 'lucide-react';

const Downloads: React.FC = () => {
  const { downloads } = useSchoolStore();

  // Group downloads by category
  const categories = Array.from(new Set(downloads.map(dl => dl.category)));

  return (
    <div>
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Resource Center</h1>
        <p className="text-blue-200">Organized folders for syllabi, forms, and prospectuses.</p>
      </div>

      <Section id="downloads-list" light>
        <div className="max-w-5xl mx-auto">
            {categories.length > 0 ? (
                <div className="space-y-12">
                    {categories.map(category => (
                        <div key={category} className="animate-fadeIn">
                            <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-2">
                                <Folder className="text-primary" size={24} />
                                <h3 className="text-2xl font-bold text-gray-800">{category}</h3>
                                <span className="ml-2 bg-blue-50 text-primary text-xs px-2 py-1 rounded-full font-bold">
                                    {downloads.filter(d => d.category === category).length} Items
                                </span>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                                {downloads
                                    .filter(d => d.category === category)
                                    .map(dl => (
                                        <div key={dl.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition flex items-center justify-between group">
                                            <div className="flex items-center gap-4">
                                                <div className="bg-red-50 text-red-500 p-3 rounded-lg group-hover:bg-red-100 transition">
                                                    <FileText size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800 text-base group-hover:text-primary transition">{dl.title}</h4>
                                                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Ready to Download</p>
                                                </div>
                                            </div>
                                            <a 
                                                href={dl.url} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => { if(dl.url === '#') e.preventDefault(); }} 
                                                className="flex items-center gap-2 text-primary p-2 hover:bg-primary hover:text-white rounded-lg transition"
                                                title="Download"
                                            >
                                                <Download size={20} />
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="p-20 text-center text-gray-500 bg-white rounded-2xl border border-dashed border-gray-300">
                    <Download size={48} className="mx-auto mb-4 opacity-10" />
                    <p className="text-lg font-medium">No downloadable resources available at the moment.</p>
                    <p className="text-sm">Please check back later or contact the school office.</p>
                </div>
            )}
        </div>
      </Section>
    </div>
  );
};

export default Downloads;