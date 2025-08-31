import React from 'react';
import { CategoryCard } from '../components/CategoryCard';
import { BlogCard } from '../components/BlogCard';
import { categories, articles as blogPosts } from '../data/articles';
import { Tag } from 'lucide-react';

interface CategoriesPageProps {
  onNavigate: (page: string, postId?: string) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Tag className="h-4 w-4" />
            <span>Categorías</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Explora por tema
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Encuentra exactamente lo que necesitas organizando el contenido por categorías
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => onNavigate('categories')}
            />
          ))}
        </div>

        {/* Recent Articles by Category */}
        {categories.map((category) => {
          const categoryPosts = blogPosts.filter(post => post.category === category.name);
          
          if (categoryPosts.length === 0) return null;

          return (
            <section key={category.id} className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {category.name}
                </h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                  {categoryPosts.length} artículo{categoryPosts.length !== 1 ? 's' : ''}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    onClick={() => onNavigate('article', post.id)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};