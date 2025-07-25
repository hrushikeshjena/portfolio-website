import { useState, useEffect } from "react";
import anime from "animejs";
import axios from "axios";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(
          "https://master-admin-backend.onrender.com/api/byadmin/getblog"
        );
        setBlogPosts(response.data?.data || []);
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

  const generateJSONLD = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Elemnexus Blog",
      url: "https://www.elemnexus.com/blog",
      description: "Latest insights and updates from Elemnexus",
      blogPost: blogPosts.slice(0, 3).map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        image: post.image,
        author: {
          "@type": "Person",
          name: post.author || "Unknown",
        },
        datePublished: post.createdAt,
        description: post.description?.slice(0, 150),
        url: `https://www.elemnexus.com/blog/${post.slug}`,
      })),
    };
  };

  return (
    <section
      id="blog"
      className="pb-28 bg-black"
      role="region"
      aria-label="Latest Blog Posts"
    >
      <div className="container mx-auto px-6 md:px-12 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Insights</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-4">
          {blogPosts.length === 0 ? (
            <p className="text-center text-gray-400">
              No blog posts available.
            </p>
          ) : (
            blogPosts.slice(0, 3).map((post, index) => (
              <article
                key={index}
                className="blog-post relative border border-gray-200 shadow-lg rounded-2xl overflow-hidden p-6 backdrop-blur-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                {post.image && (
                  <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
                    <img
                      src={post.image}
                      alt={post.title || "Blog Post Image"}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      itemProp="image"
                    />
                  </div>
                )}

                <div className="flex justify-between items-center mb-4 text-xs text-gray-300">
                  <p>
                    By{" "}
                    <span
                      className="font-semibold text-white"
                      itemProp="author"
                    >
                      {post.author || "Unknown"}
                    </span>
                  </p>
                  <p itemProp="datePublished">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <h3
                  className="text-xl font-semibold text-blue-600 hover:text-blue-400 transition-colors duration-300"
                  itemProp="headline"
                >
                  {post.title}
                </h3>

                <p
                  className="text-gray-200 text-sm mt-2"
                  itemProp="description"
                >
                  {post.content?.slice(0, 100) ||
                    "No description available"}
                  ...
                </p>

                <a
                  href={`/blog/${post.slug}`}
                  itemProp="url"
                  className="inline-block mt-4 text-blue-400 hover:text-blue-600 font-semibold transition-colors duration-300"
                >
                  Read More →
                </a>
              </article>
            ))
          )}
        </div>
      </div>

      {blogPosts.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(generateJSONLD())}
        </script>
      )}
    </section>
  );
};

export default BlogSection;
