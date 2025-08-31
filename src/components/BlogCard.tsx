import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <article 
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-green-700">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
          </div>
        </div>
      </div>
    </article>
  );
};