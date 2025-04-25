import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const BlogPage = () => {
  const { state } = useLocation();
  const blogs = state?.blogs || [];
  const error = state?.error;
  const destination = state?.destination || 'this destination';
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (error) {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>Travel Guides for {destination}</h1>
        <div style={styles.errorContainer}>
          <p style={styles.errorText}>{error}</p>
        </div>
      </div>
    );
  }

  const mainBlog = blogs[selectedIndex];
  const remainingBlogs = blogs.filter((_, index) => index !== selectedIndex);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Travel Guides for {destination}</h1>

      {mainBlog && <BlogArticle blog={mainBlog} />}

      {remainingBlogs.length > 0 && (
        <div style={styles.upNextContainer}>
          <h3 style={styles.upNextHeader}>Up Next</h3>
          <ul style={styles.upNextList}>
            {remainingBlogs.map((blog, index) => (
              <li
                key={blog._id}
                style={{ ...styles.upNextItem, display: 'flex', gap: '12px' }}
                onClick={() => setSelectedIndex(blogs.indexOf(blog))}
              >
                <img
                  src={blog.image || 'https://via.placeholder.com/100'}
                  alt={blog.title}
                  style={{
                    width: '100px',
                    height: '70px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    flexShrink: 0
                  }}
                />
                <div>
                  <strong style={{ fontSize: '16px', display: 'block' }}>{blog.title}</strong>
                  <div style={{ fontSize: '13px', color: '#888' }}>
                    {blog.readTime || '2 min read'}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const BlogArticle = ({ blog }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = blog.content.length > 300;
  const contentToShow = expanded ? blog.content : blog.content.slice(0, 300);

  return (
    <article style={styles.blogArticle}>
      <header>
        <h2 style={styles.blogTitle}>{blog.title}</h2>
        <div style={styles.metaData}>
          <time>📅 {new Date(blog.createdAt).toLocaleDateString()}</time>
          {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
            <time> | 🔄 {new Date(blog.updatedAt).toLocaleDateString()}</time>
          )}
        </div>
      </header>

      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          style={styles.blogImage}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/800x400?text=Blog+Image';
          }}
        />
      )}

      <div style={styles.blogContent}>
        {contentToShow.split('\n').map((para, i) => (
          <p key={i} style={styles.paragraph}>{para}</p>
        ))}
        {isLong && (
          <button
            style={styles.readMoreBtn}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show Less ▲' : 'Read More ▼'}
          </button>
        )}
      </div>
    </article>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '960px',
    margin: '0 auto',
    fontFamily: "'Poppins', sans-serif",
    color: '#2d3436'
  },
  header: {
    fontSize: '36px',
    color: '#0984e3',
    fontWeight: '700',
    marginBottom: '40px',
    borderBottom: '2px solid #dfe6e9',
    paddingBottom: '10px',
    fontFamily: "'Roboto', sans-serif"
  },
  blogArticle: {
    backgroundColor: '#fdfdfd',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e0e0e0',
    marginBottom: '40px'
  },
  blogTitle: {
    fontSize: '26px',
    color: '#2c3e50',
    marginBottom: '10px',
    fontWeight: '700',
    fontFamily: "'Roboto', sans-serif"
  },
  metaData: {
    fontSize: '14px',
    color: '#636e72',
    marginBottom: '20px'
  },
  blogImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '480px',
    borderRadius: '10px',
    objectFit: 'cover',
    marginBottom: '25px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.07)'
  },
  blogContent: {
    fontSize: '17px',
    lineHeight: '1.8',
    color: '#2d3436'
  },
  paragraph: {
    marginBottom: '16px'
  },
  readMoreBtn: {
    background: 'none',
    border: 'none',
    color: '#0984e3',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
    marginTop: '10px'
  },
  errorContainer: {
    backgroundColor: '#ffe6e6',
    borderLeft: '6px solid #e17055',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px'
  },
  errorText: {
    color: '#d63031',
    fontSize: '16px'
  },
  upNextContainer: {
    borderTop: '1px solid #dfe6e9',
    paddingTop: '30px'
  },
  upNextHeader: {
    fontSize: '20px',
    marginBottom: '10px',
    fontWeight: '600',
    color: '#636e72'
  },
  upNextList: {
    listStyleType: 'none',
    paddingLeft: 0
  },
  upNextItem: {
    padding: '10px',
    border: '1px solid #eee',
    borderRadius: '10px',
    marginBottom: '12px',
    cursor: 'pointer',
    background: '#fafafa',
    alignItems: 'center'
  }
};

export default BlogPage;
