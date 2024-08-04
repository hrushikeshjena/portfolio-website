import React, { useEffect } from 'react';
import anime from 'animejs';

const blogPosts = [
  {
    title: 'Understanding React Hooks',
    summary: 'An in-depth look at React hooks, including useState and useEffect, and how they simplify state management in functional components.',
    date: 'August 1, 2024',
    link: 'https://example.com/understanding-react-hooks'
  },
  {
    title: 'A Guide to Node.js Performance Optimization',
    summary: 'Tips and techniques for improving the performance of Node.js applications, including efficient database queries and asynchronous operations.',
    date: 'July 15, 2024',
    link: 'https://example.com/nodejs-performance-optimization'
  },
  {
    title: 'Top 5 CSS Frameworks for Modern Web Development',
    summary: 'A comparison of popular CSS frameworks like Tailwind CSS, Bootstrap, and Bulma, and how they can enhance your web development workflow.',
    date: 'June 25, 2024',
    link: 'https://example.com/css-frameworks-comparison'
  },
  // Add more blog posts as needed
];

const BlogSection = () => {
  useEffect(() => {
    // Animation for blog posts
    anime({
      targets: '.blog-post',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      delay: anime.stagger(100), // Staggered delay for each blog post
      duration: 800,
    });
  }, []);

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Blog / Articles
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="blog-post bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-blue-700">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.summary}</p>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
