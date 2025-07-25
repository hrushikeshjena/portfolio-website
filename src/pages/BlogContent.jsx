import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BlogContent() {
  const [fetchedBlogs, setFetchedBlogs] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://master-admin-backend.onrender.com/api/byadmin/getblog"
      );
      setFetchedBlogs(response.data?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
  

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {fetchedBlogs.map((blog, index) => (
          <div
            key={index}
            className="blog-post relative border border-gray-200 shadow-lg rounded-2xl overflow-hidden p-2 backdrop-blur-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500"
          >
            <Link to={`/blog/${blog.slug}`} className="block">
              <div className="overflow-hidden rounded-t-xl">
                {blog.image && (
                  <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
                    <img
                      src={blog.image}
                      alt={blog.title || "Blog Post Image"}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      itemProp="image"
                    />
                  </div>
                )}
              </div>
            </Link> 

            <div className="p-5">
              <div className="flex justify-between">
                <p className="text-gray-400 text-sm ">
                  Category: {blog.category}
                </p>

                <p className="text-gray-400 text-sm">
                  {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <h2 className="text-xl font-semibold mt-4 text-white hover:text-green-400 transition duration-200">
                <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Author: {blog.author}
              </p>

              <p className="text-gray-300 mt-3 line-clamp-3">{blog.content}</p>

              <a
                href={`/blog/${blog.slug}`}
                itemProp="url"
                className="inline-block mt-4 text-blue-400 hover:text-blue-600 font-semibold transition-colors duration-300"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogContent;
