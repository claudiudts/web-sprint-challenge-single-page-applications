import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return(
    <header>
      <h1>Lambda Eats</h1>
      <Link to='/pizza'>
        <button>Let's get started!</button>
      </Link>
    </header>
  );
};

export default Header;