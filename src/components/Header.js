import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">D&D 5e Access</Link>
        </li>
        <li>
          <Link to="/monster">Monster</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
