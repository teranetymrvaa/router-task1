import React from 'react';
import { Link } from 'react-router-dom';

function NavbarPage() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '15px',
    backgroundColor: 'red',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  };

  const hoverStyle = {
    backgroundColor: '#555',
    transform: 'scale(1.05)',
  };

  return (
    <nav style={navStyle}>
      {['/', '/books', '/favorites', '/basket', '/adddata'].map((path, index) => {
        const names = ['Home', 'Books', 'Favorites', 'Basket', 'Add Book'];
        return (
          <Link
            key={path}
            to={path}
            style={linkStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
          >
            {names[index]}
          </Link>
        );
      })}
    </nav>
  );
}

export default NavbarPage;
