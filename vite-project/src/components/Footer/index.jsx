import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#222',
    color: '#ccc',
    padding: '20px 0',
    textAlign: 'center',
    fontSize: '14px',
    marginTop: 'auto',
  };

  const linkStyle = {
    color: '#aaa',
    margin: '0 10px',
    textDecoration: 'none',
    transition: 'color 0.3s',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <a href="#" style={linkStyle}>About</a>
        <a href="#" style={linkStyle}>Contact</a>
        <a href="#" style={linkStyle}>Privacy</a>
      </div>
      <div style={{ marginTop: '10px' }}>
        © {new Date().getFullYear()} MyBookApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
