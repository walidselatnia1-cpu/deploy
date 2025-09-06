
import React from 'react';
import { BLOG_POSTS } from '../constants/blogPosts';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">From Our Journal</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Insights, tips, and inspiration for a more beautiful and organized home life.
          </p>
        </div>

        <div className="mt-16 mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img src={`https://picsum.photos/seed/blog-${post.id}/600/800`} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <span className="absolute inset-0"></span>
                  {post.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-300">{post.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
