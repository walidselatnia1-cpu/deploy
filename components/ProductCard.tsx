
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block overflow-hidden">
      <div className="relative h-64 sm:h-72">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-75 transition-opacity"
        />
      </div>

      <div className="relative bg-white pt-4">
        <h3 className="text-sm text-gray-500 group-hover:underline group-hover:underline-offset-4">
          {product.category}
        </h3>
        <p className="mt-1.5 text-lg font-medium text-gray-900">{product.title}</p>
        <p className="mt-1.5 text-md text-gray-700">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
