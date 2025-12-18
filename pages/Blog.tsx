import React from 'react';
import { useSchoolStore } from '../context/SchoolContext';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const { blogPosts } = useSchoolStore();

  return (
    <div>
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">School Blog</h1>
        <p className="text-blue-200">Latest news, articles, and updates from JIS.</p>
      </div>

      <Section id="blog-list" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col h-full group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image || `https://picsum.photos/800/400?random=${post.id}`} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {post.date}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <User size={14} /> <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition line-clamp-2">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-secondary transition mt-auto"
                >
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
          {blogPosts.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              <p>No blog posts published yet.</p>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

export default Blog;