import React, { useState } from 'react';
import axios from 'axios';

const BlogUploadPage = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    image: '',
    category: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const response = await axios.post('http://localhost:4000/api/v1/blog/createblog', blogData);
      
      setMessage({ 
        text: 'Blog created successfully!', 
        type: 'success' 
      });
      
      // Reset form
      setBlogData({
        title: '',
        content: '',
        image: '',
        category: ''
      });

    } catch (error) {
      setMessage({ 
        text: error.response?.data?.message || 'Failed to create blog', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blog-upload-container">
      <h1>Create New Blog Post</h1>
      
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={blogData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea
            name="content"
            value={blogData.content}
            onChange={handleChange}
            required
            rows="6"
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={blogData.category}
            onChange={handleChange}
            required
            placeholder="Enter category (e.g. Technology, Food, Travel)"
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="url"
            name="image"
            value={blogData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Publishing...' : 'Publish Blog'}
        </button>
      </form>

      <style jsx>{`
        .blog-upload-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        h1 {
          color: #333;
          text-align: center;
        }
        .form-group {
          margin-bottom: 20px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        input[type="text"],
        input[type="url"],
        textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        textarea {
          min-height: 150px;
        }
        button {
          background-color: #4CAF50;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
        button:hover {
          background-color: #45a049;
        }
        button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }
        .message {
          padding: 10px;
          margin-bottom: 20px;
          border-radius: 4px;
        }
        .success {
          background-color: #dff0d8;
          color: #3c763d;
        }
        .error {
          background-color: #f2dede;
          color: #a94442;
        }
      `}</style>
    </div>
  );
};

export default BlogUploadPage;