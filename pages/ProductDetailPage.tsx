
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return <div className="text-center py-20">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000);
  };
  
  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <img src={product.imageUrl} alt={product.title} className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 mb-2">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-3xl text-gray-800 mt-4">${product.price.toFixed(2)}</p>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8 flex items-center gap-4">
             <div className="flex items-center border border-gray-300 rounded-md">
                <button onClick={() => handleQuantityChange(-1)} className="px-4 py-2 text-lg font-semibold text-gray-600 hover:bg-gray-100 rounded-l-md">-</button>
                <span className="px-4 py-2 text-lg">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="px-4 py-2 text-lg font-semibold text-gray-600 hover:bg-gray-100 rounded-r-md">+</button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gray-800 text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-700 transition-colors disabled:bg-gray-400"
            >
              Add to Cart
            </button>
          </div>
            {addedMessage && (
                <div className="mt-4 text-center text-green-600 font-semibold">
                    Added to cart!
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
