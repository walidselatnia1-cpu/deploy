
import React from 'react';
import { PRODUCTS } from '../constants/products';
import ProductCard from './ProductCard';

const FeaturedProducts: React.FC = () => {
  const featured = PRODUCTS.slice(0, 8);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Collection</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Handpicked essentials to inspire your home and kitchen.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
