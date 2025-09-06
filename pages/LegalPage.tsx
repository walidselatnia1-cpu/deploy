
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LEGAL_CONTENT } from '../constants/legalContent';

const LegalPage: React.FC = () => {
  const { page } = useParams<{ page: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  
  if (!page || !LEGAL_CONTENT[page]) {
    return <Navigate to="/" replace />;
  }

  const { title, content } = LEGAL_CONTENT[page];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{title}</h1>
          </div>
          <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
