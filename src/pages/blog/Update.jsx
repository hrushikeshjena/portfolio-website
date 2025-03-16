import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import { useNavigate, useParams } from "react-router-dom";

function UpdateWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();
  const { firebaseId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from backend API
        const response = await axios.get(`/api/get-blog/${firebaseId}`);

        if (response.data) {
          const targetObject = response.data;
          setTitle(targetObject.Title || "");
          setContent(targetObject.Content || "");
          setAuthor(targetObject.Author || "");
          setImageUrl(targetObject.ImageUrl || ""); // Set existing image URL
        } else {
          alert("Error: Record not found.");
        }
      } catch (error) {
        alert("Error fetching data: " + error.message);
      }
    };

    fetchData();
  }, [firebaseId]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const updateData = async (e) => {
    e.preventDefault();
    try {
      let updatedImageUrl = imageUrl;

      // If a new image is uploaded, replace the existing image
      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        // Send the image to the backend API
        const imageResponse = await axios.post("/api/upload-image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        updatedImageUrl = imageResponse.data.imageUrl; // Assuming the backend returns the image URL
      }

      // Send the updated blog data to the backend API
      const updatedBlog = {
        Title: title,
        Content: content,
        Author: author,
        ImageUrl: updatedImageUrl,
      };

      await axios.put(`/api/update-blog/${firebaseId}`, updatedBlog);

      alert("Data updated successfully!");
      navigate("/"); // Redirect to the desired route after updating
    } catch (error) {
      alert("Error updating data: " + error.message);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      <h2>Update Blog Post</h2>
      <form onSubmit={updateData}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              minHeight: "100px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imageUrl && (
            <div style={{ marginTop: "10px" }}>
              <img src={imageUrl} alt="Blog" style={{ maxWidth: "100%", height: "auto", borderRadius: "4px" }} />
            </div>
          )}
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Update Blog
        </button>
      </form>
    </div>
  );
}

export default UpdateWrite;
