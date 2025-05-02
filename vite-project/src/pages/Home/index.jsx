import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    background: 'linear-gradient(135deg, #8e0e00 0%, #474747 100%)', // qırmızıdan boza
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  };

  const titleStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const subtitleStyle = {
    fontSize: '20px',
    maxWidth: '600px',
    marginBottom: '30px',
    lineHeight: '1.6',
    color: '#ddd'
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#c0392b', // tünd qırmızı düymə
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease'
  };

  const buttonHover = {
    backgroundColor: '#a93226'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Welcome to MyBookApp</h1>
      <p style={subtitleStyle}>
        Find your next favorite read among our beautiful collection of books.
        Browse classics, adventures, and new releases!
      </p>
      <Link
        to="/books"
        style={buttonStyle}
        onMouseEnter={(e) => Object.assign(e.target.style, buttonHover)}
        onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
      >
        Explore Books
      </Link>
    </div>
  );
}

export default Home;
