
import React from 'react';
import { Category } from '../types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category | 'All';
  onSelectCategory: (category: Category | 'All') => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  const allCategories: (Category | 'All')[] = ['All', ...categories];

  return (
    <aside className="w-full md:w-64 lg:w-72">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Categories</h2>
      <div className="flex flex-wrap gap-2 md:flex-col md:gap-0 md:space-y-2">
        {allCategories.map(category => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 text-left rounded-md transition-colors text-sm md:text-base ${
              selectedCategory === category
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default CategoryFilter;
