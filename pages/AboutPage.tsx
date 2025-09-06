
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-base font-semibold leading-7 text-rose-600">Our Story</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Haven & Hearth</h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              We believe a home is more than just a place to live; it's a sanctuary for comfort, creativity, and connection. Our journey began with a simple idea: to curate a collection of home and kitchen essentials that are as beautiful as they are functional.
            </p>
          </div>

          <div className="mt-16">
            <img src="https://picsum.photos/seed/about-us/1200/600" alt="Well-organized kitchen" className="w-full rounded-2xl shadow-lg"/>
          </div>

          <div className="mt-16 text-lg text-gray-700 leading-relaxed space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
            <p>
              In a world of fleeting trends and disposable goods, Haven & Hearth stands for quality that lasts. We were tired of seeing kitchens cluttered with single-use gadgets and living rooms filled with uninspired decor. We envisioned a place where every item had a purpose, a story, and a timeless appeal.
            </p>
            <p>
              Our mission is to help you create a space that you love coming home to. We meticulously source each product, from durable cookware that inspires culinary adventures to thoughtful storage solutions that bring order to chaos. We partner with artisans and manufacturers who share our commitment to craftsmanship and sustainable practices.
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Choose Us?</h2>
            <p>
              <strong>Curated with Care:</strong> Every product in our collection is handpicked by our team. We test for quality, durability, and aesthetic appeal to ensure it meets our high standards.
            </p>
            <p>
              <strong>Function Meets Form:</strong> We believe that practical items can also be beautiful. Our products are designed to perform exceptionally while enhancing the look and feel of your home.
            </p>
            <p>
              <strong>Customer-Centric:</strong> Your satisfaction is at the heart of everything we do. We are dedicated to providing an exceptional shopping experience, from easy navigation on our site to responsive and helpful customer service.
            </p>
            <p>
              Thank you for inviting Haven & Hearth into your home. We're excited to be a part of your journey in creating a more beautiful and functional living space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
