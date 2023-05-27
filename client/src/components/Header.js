// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
           <img src="/logo.svg" alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/login">Log in</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
