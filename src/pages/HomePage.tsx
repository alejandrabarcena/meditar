import React from 'react';
import { Hero } from '../components/Hero';
import { BlogCard } from '../components/BlogCard';
import { CategoryCard } from '../components/CategoryCard';
import { articles as blogPosts, categories } from '../data/articles';
import { ArrowRight, BookOpen } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, postId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Artículos destacados
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explora nuestros contenidos más populares sobre mindfulness y bienestar mental
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onClick={() => onNavigate('article', post.id)}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('articles')}
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 group"
            >
              <BookOpen className="h-5 w-5" />
              <span>Ver todos los artículos</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explora por categoría
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Encuentra el contenido que necesitas según tu área de interés
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => onNavigate('categories')}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};