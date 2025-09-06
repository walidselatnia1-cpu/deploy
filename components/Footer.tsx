
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Cart', path: '/cart' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/legal/privacy-policy' },
    { name: 'Terms & Conditions', path: '/legal/terms-and-conditions' },
    { name: 'Refund & Return Policy', path: '/legal/refund-and-return-policy' },
    { name: 'Shipping & Delivery', path: '/legal/shipping-and-delivery-policy' },
    { name: 'Disclaimer', path: '/legal/disclaimer' },
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Haven & Hearth</h3>
            <p className="text-gray-600">Your source for quality home and kitchen essentials that bring comfort and style to your life.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Newsletter</h4>
            <p className="text-gray-600 mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-gray-800 focus:outline-none"/>
              <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Haven & Hearth. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
