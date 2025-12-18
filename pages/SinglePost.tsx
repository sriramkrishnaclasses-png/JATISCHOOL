import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSchoolStore } from '../context/SchoolContext';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const SinglePost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { blogPosts } = useSchoolStore();

  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Post Not Found</h2>
        <Link to="/blog" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-800">
      {/* Header Image */}
      <div className="h-[300px] md:h-[400px] relative">
        <img 
          src={post.image || `https://picsum.photos/1200/600?random=${post.id}`} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
          <div className="container mx-auto">
             <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-4 transition">
               <ArrowLeft size={16} /> Back to Blog
             </Link>
             <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
             <div className="flex flex-wrap items-center gap-6 text-sm md:text-base">
                <div className="flex items-center gap-2"><Calendar size={18} /> {post.date}</div>
                <div className="flex items-center gap-2"><User size={18} /> {post.author}</div>
             </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-xl">
           <div className="prose prose-lg prose-blue max-w-none">
             <p className="text-xl text-gray-600 italic mb-8 border-l-4 border-secondary pl-4 py-2 bg-gray-50 rounded-r">
               {post.excerpt}
             </p>
             <div className="whitespace-pre-line text-gray-800 leading-relaxed">
               {post.content}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;