import React from 'react';
import HomePage from './HomePage';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <HomePage>
      <div className="HeaderContainer">
        <div className='Nav'>
          <Link to='/'>HOME</Link>
          <Link to="/Pizza">MAKE A Pizza</Link>
        </div>
      </div>

      <div className="TextContainer">
        <div className="TextTitle">
          <h2>Welcome to LambdaPizza </h2>
        </div>
        <div className="TextParagraph">
        </div>
      </div>
    </HomePage>
  )
}
export default Home