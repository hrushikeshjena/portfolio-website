import { useState } from "react";
import axios from "axios";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); // For loading state

  const saveBlog = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("author", author);
      formData.append("createdAt", new Date().toISOString());
  
      // Append the image only if it's selected
      if (image) {
        formData.append("file", image);
      }
  
      // Send blog data + image in one request
      const response = await fetch("http://localhost:5050/blogs", {
        method: "POST",
        body: formData, // Send as multipart/form-data
      });
  
      if (!response.ok) throw new Error("Failed to create blog");
  
      const data = await response.json();
      console.log("Blog uploaded:", data);
  
      alert("Blog created successfully");
  
      // Reset form after submission
      setTitle("");
      setDescription("");
      setAuthor("");
      setImage(null);
    } catch (err) {
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="blog-container">
      <h2>Create a New Blog</h2>
      <form className="blog-form" onSubmit={saveBlog}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          placeholder="Enter blog title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Content</label>
        <textarea
          value={description}
          placeholder="Enter blog content"
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <label>Author</label>
        <input
          type="text"
          value={author}
          placeholder="Enter author name"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <label>Upload Image</label>
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="preview-image"
            style={{ width: "100px", height: "100px", marginTop: "10px" }}
          />
        )}
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
}

export default Create;
