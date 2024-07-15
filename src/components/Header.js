import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-dark text-white p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>Hydrogen Power</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about-hydrogen' ? 'active' : ''}`} to="/about-hydrogen">About Hydrogen</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/advantages' ? 'active' : ''}`} to="/advantages">Advantages</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/challenges' ? 'active' : ''}`} to="/challenges">Challenges</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/promising-areas' ? 'active' : ''}`} to="/promising-areas">Promising Areas</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
