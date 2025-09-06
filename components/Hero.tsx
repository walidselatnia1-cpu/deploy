
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/hero-bg/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left text-white">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Elevate Your Everyday
            <strong className="block font-extrabold text-rose-500 mt-2">
              Live Beautifully.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Discover our curated collection of high-quality home and kitchen essentials, designed to bring joy, simplicity, and style to your daily routines.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center justify-center sm:justify-start">
            <Link
              to="/shop"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Shop Now
            </Link>

            <Link
              to="/about"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
