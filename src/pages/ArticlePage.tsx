import React from 'react';
import { articles as blogPosts } from '../data/articles';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';

interface ArticlePageProps {
  postId: string;
  onNavigate: (page: string) => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({ postId, onNavigate }) => {
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
          <button
            onClick={() => onNavigate('home')}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('articles')}
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Volver a artículos</span>
          </button>

          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {post.category}
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} de lectura</span>
              </div>
              <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors duration-200">
                <Share2 className="h-4 w-4" />
                <span>Compartir</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};