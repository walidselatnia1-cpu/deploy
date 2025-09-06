
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants/products';
import ProductCard from '../components/ProductCard';
import { Category } from '../types';
import CategoryFilter from '../components/CategoryFilter';

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const categories = useMemo(() => {
    return [...new Set(PRODUCTS.map(p => p.category))] as Category[];
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return PRODUCTS;
    }
    return PRODUCTS.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Collection</h1>
        <p className="mt-4 text-xl text-gray-600">Browse our curated selection of home and kitchen essentials.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <main className="flex-1">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ShopPage;
