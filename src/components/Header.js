import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/stylesheets/header.css';

const Header = () => (
  <header className="container">
    <nav>
      <ul>
        <li>
          <Link to="/" className="brand">D&D 5e Access</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
