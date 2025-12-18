import React, { useState } from 'react';
import { useSchoolStore } from '../context/SchoolContext';
import Section from '../components/Section';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const { gallery } = useSchoolStore();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(gallery.map(item => item.category)))];

  const filteredGallery = filter === 'All' ? gallery : gallery.filter(item => item.category === filter);

  return (
    <div>
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Photo Gallery</h1>
        <p className="text-blue-200">Glimpses of life at JIS.</p>
      </div>

      <Section id="gallery-grid">
         {/* Filter Buttons */}
         <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${filter === cat ? 'bg-secondary text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                    {cat}
                </button>
            ))}
         </div>

         {/* Grid */}
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGallery.map(item => (
                <div key={item.id} className="group relative overflow-hidden rounded-lg cursor-pointer h-64 shadow-sm" onClick={() => setLightboxImage(item.url)}>
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                        <p className="text-white font-bold">{item.title}</p>
                        <p className="text-gray-300 text-xs">{item.category}</p>
                    </div>
                </div>
            ))}
         </div>
         {filteredGallery.length === 0 && <div className="text-center py-10 text-gray-500">No photos found in this category.</div>}
      </Section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-gray-300 bg-white/10 p-2 rounded-full"><X size={24} /></button>
          <img src={lightboxImage} alt="Gallery Full" className="max-w-full max-h-[85vh] rounded shadow-2xl border-4 border-white" />
        </div>
      )}
    </div>
  );
};

export default Gallery;