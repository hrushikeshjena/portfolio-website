import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Blog() {
  const [fetchedBlogs, setFetchedBlogs] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://master-admin-backend.onrender.com/api/byadmin/getblog");
      if (response.data && response.data.length > 0) {
        setFetchedBlogs(response.data);
        console.log(fetchedBlogs)
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12 ">
      <h1 className="text-4xl font-extrabold text-white text-center mb-10">
        Latest Blog Posts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
     
        {fetchedBlogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl shadow-md overflow-hidden group"
          >
            <Link href={`/blog/${blog.slug}`} className="block">
              <div className="overflow-hidden rounded-t-xl">
                {blog.imageUrl && (
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-60 object-cover transition-all duration-300 group-hover:scale-105 
                    group-hover:brightness-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  />
                )}
              </div>
            </Link>

            <div className="p-5">
              <h2 className="text-xl font-semibold text-white hover:text-green-400 transition duration-200">
                <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
              </h2>
              <p className="text-gray-400 text-sm mt-2">Author: {blog.author}</p>
              <p className="text-gray-300 mt-3">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Blog;
