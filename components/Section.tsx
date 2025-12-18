import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subTitle?: string;
  className?: string;
  children: React.ReactNode;
  light?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, subTitle, className = '', children, light = false }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${light ? 'bg-gray-50' : 'bg-white'} ${className}`}>
      <div className="container mx-auto px-4 md:px-8">
        {(title || subTitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">{title}</h2>}
            {subTitle && <p className="text-gray-600 max-w-2xl mx-auto">{subTitle}</p>}
            <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
