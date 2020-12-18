import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div>
      <h3>Make a mean pizza!</h3>
      <Link to='/pizza'>
        <button>Make that mean Pizza!</button>
      </Link>
    </div>
  )
}