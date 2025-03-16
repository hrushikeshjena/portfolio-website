

"use client";
import { Mail, Instagram, Twitter, Facebook, Tag, Newspaper, ThumbsUp } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="max-w-xs sm:block hidden bg-gray-900 text-gray-300 p-6 rounded-lg shadow-lg border border-gray-700">
      {/* Profile Section */}
      <div className="mb-6 flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gray-500 shadow-lg">
          <img
            src="your-image-url.jpg"
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-white">About Me</h2>
          <p className="text-gray-400 mt-3 text-sm">
            Exploring the world of design & technology, creating amazing user experiences.
          </p>
        </div>
      </div>

      {/* Follow Us */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <ThumbsUp size={20} className="text-gray-400" /> Follow Us
        </h2>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
            <Instagram size={18} />
            Instagram
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            <Twitter size={18} />
            Twitter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition">
            <Facebook size={18} />
            Facebook
          </button>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Mail size={20} className="text-gray-400" /> Newsletter
        </h2>
        <p className="text-gray-400 mt-2 text-sm">Stay updated with our latest news.</p>
        <div className="flex mt-3">
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 border border-gray-600 bg-gray-800 text-gray-300 rounded-l-lg focus:ring focus:ring-blue-500"
          />
          <button className="bg-blue-600 px-4 text-white rounded-r-lg hover:bg-blue-700 transition">Go</button>
        </div>
      </div>

      {/* Popular Posts */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Newspaper size={20} className="text-gray-400" /> Popular Posts
        </h2>
        <ul className="mt-4 space-y-3">
          {[
            { title: "The Future of AI", image: "https://source.unsplash.com/100x100/?ai,technology" },
            { title: "Minimalist Design Trends", image: "https://source.unsplash.com/100x100/?design,minimal" },
            { title: "Top 10 Web Dev Tools", image: "https://source.unsplash.com/100x100/?coding,web" }
          ].map((post, index) => (
            <li key={index} className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">
              <img src={post.image} alt={post.title} className="w-14 h-14 rounded-md" />
              <span className="text-gray-300 hover:text-blue-400 transition">{post.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          📂 Categories
        </h2>
        <ul className="mt-3 space-y-2">
          {["Design", "Technology", "Lifestyle", "Business", "Development"].map((category, index) => (
            <li key={index} className="bg-gray-800 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 transition">
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Tag size={20} className="text-gray-400" /> Tags
        </h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {["Web Dev", "UI/UX", "React", "AI", "SEO"].map(tag => (
            <span
              key={tag}
              className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 