import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="space-y-3">
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
          {category.name}
        </div>
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
          {category.description}
        </p>
      </div>
    </div>
  );
};