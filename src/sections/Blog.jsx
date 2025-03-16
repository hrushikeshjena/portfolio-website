import React, { useState, useEffect } from "react";
import anime from "animejs";
import axios from "axios";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5050/blogs");
        console.log("Fetched Data:", response.data);
        setBlogPosts(response.data);
      } catch (error) {
        alert(`Error fetching data: ${error.message}`);
      }
    };

    fetchBlogPosts();
  }, []);

  useEffect(() => {
    anime({
      targets: ".blog-post",
      opacity: [0, 1],
      translateY: [20, 0],
      easing: "easeOutExpo",
      delay: anime.stagger(100),
      duration: 800,
    });
  }, [blogPosts]);

  return (
    <section id="blog" className="pb-28 ">
      <div className="container mx-auto px-6 md:px-12 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Insights</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-4">
          {blogPosts.length === 0 ? (
            <p className="text-center text-gray-400">
              No blog posts available.
            </p>
          ) : (
            blogPosts.map((post, index) => (
              <article
                key={index}
                className="relative border border-gray-200 shadow-lg rounded-2xl overflow-hidden p-6 backdrop-blur-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500"
              >
                {/* Image Section with Hover Zoom */}
                {post.imageUrl && (
                  <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
                    <img
                      src={`http://localhost:5050${post.imageUrl}`}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                )}

                {/* Author & Date */}
                <div className="flex justify-between items-center mb-4 text-xs text-gray-300">
                  <p>
                    By{" "}
                    <span className="font-semibold text-white">
                      {post.author || "Unknown"}
                    </span>
                  </p>
                  <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-sm mt-2">
                  {post.description?.slice(0, 100) ||
                    "No description available"}
                  ...
                </p>

                {/* Read More Button */}
                <a
                  href="#"
                  className="inline-block mt-4 text-blue-400 hover:text-blue-600 font-semibold transition-colors duration-300"
                >
                  Read More →
                </a>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
