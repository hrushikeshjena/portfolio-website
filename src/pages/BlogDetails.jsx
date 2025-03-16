

// import Blogs from "../../db";
import { notFound } from "next/navigation";
// import Sidebar from "./sildebar";
import { useParams } from "react-router-dom";

export default function BlogDetails({ params }) {
    const { slug } = useParams;
    const blogIndex = Blogs.findIndex((b) => b.slug === slug);
    const blog = Blogs[blogIndex];

    if (!blog) {
        notFound();
    }

    const previousBlog = Blogs[blogIndex - 1] || null;
    const nextBlog = Blogs[blogIndex + 1] || null;

    return (
        <div className="flex flex-col lg:flex-row justify-between gap-8 px-6 py-12 mx-auto container">
            {/* Blog Content */}
            <div className="w-full lg:w-3/4 p-6 rounded-lg shadow-lg backdrop-blur-lg bg-transparent border border-gray-700">
                {/* Blog Title */}
                <h1 className="text-4xl font-extrabold mb-4 text-green-400">
                    {blog.title}
                </h1>

                {/* Blog Image */}
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-72 object-cover transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,0,0.4)]"
                    />
                </div>

                {/* Date */}
                <p className="text-gray-400 mt-3">{blog.date}</p>

                {/* Blog Content */}
                <p className="mt-6 leading-relaxed text-gray-300">{blog.content}</p>

                {/* Tags */}
                <div className="mt-6">
                    <strong className="text-green-400">Tags:</strong> {blog.tags?.join(", ") || "No tags"}
                </div>

                {/* Previous & Next Blog Navigation */}
                <div className="flex justify-between mt-10">
                    {previousBlog ? (
                        <a href={`/blog/${previousBlog.slug}`} className="text-green-400 text-lg font-semibold hover:underline">
                            ← {previousBlog.title}
                        </a>
                    ) : <div></div>}
                    {nextBlog ? (
                        <a href={`/blog/${nextBlog.slug}`} className="text-green-400 text-lg font-semibold hover:underline">
                            {nextBlog.title} →
                        </a>
                    ) : <div></div>}
                </div>

                {/* Comments Section */}
                <div className="mt-12 border-t border-gray-700 pt-6">
                    <h3 className="text-2xl font-semibold text-green-400 mb-4">💬 Comments</h3>
                    {blog.comments?.length ? (
                        blog.comments.map((comment, index) => (
                            <div key={index} className="mb-4 p-4 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700 shadow-lg">
                                <p className="font-bold text-green-300">{comment.author}</p>
                                <p className="text-gray-400 text-sm">{comment.date}</p>
                                <p className="mt-2 text-gray-300">{comment.text}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No comments yet. Be the first to comment! 🚀</p>
                    )}
                </div>

                {/* Comment Form */}
                <div className="mt-10 bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg border border-gray-700">
                    <h2 className="text-2xl font-bold text-green-400 mb-4">✍️ Leave a Comment</h2>

                    {/* Name Input */}
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                    />

                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white mt-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                    />

                    {/* Message Textarea */}
                    <textarea
                        placeholder="Write your comment..."
                        className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white mt-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                        rows="4"
                    ></textarea>

                    {/* Submit Button */}
                    <button
                        className="w-full bg-green-500 text-white px-4 py-3 rounded-lg mt-4 font-semibold text-lg transition duration-300 hover:bg-green-600 active:scale-95 shadow-lg"
                    >
                        🚀 Post Comment
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
                {/* <Sidebar /> */}
            </div>
        </div>
    );
}
