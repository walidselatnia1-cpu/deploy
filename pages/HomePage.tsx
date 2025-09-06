
import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Curated for a Better Home
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Haven & Hearth, we believe that your home should be a sanctuary. That's why we meticulously select products that blend functionality with timeless design. From the heart of the kitchen to the coziest corner of your living room, our essentials are crafted to enhance your life, one beautiful piece at a time.
          </p>
        </div>
      </section>

      <FeaturedProducts />

      <section className="bg-gray-800">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 sm:py-24">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to transform your space?
              </h2>
              <p className="mt-4 text-gray-300">
                Explore our full collection and find the perfect pieces to complete your home.
              </p>
            </div>
            <div className="mt-8 flex justify-center sm:mt-0 sm:flex-shrink-0 sm:justify-start">
              <Link
                to="/shop"
                className="inline-block rounded-md border border-transparent bg-rose-600 px-6 py-3 text-base font-medium text-white hover:bg-rose-700"
              >
                Explore Shop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
