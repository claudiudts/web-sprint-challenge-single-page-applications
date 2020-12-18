import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = (props) => {
  return(
    <div className='confirmation'>
      <h2>Thank you for placing an order with us!</h2>
      {Object.keys(props.placeOrder).map(property => {
        return <p>{property}: {props.placeOrder[property]}</p>
      })}
      <Link to='/pizza'>
        <button>Make Another</button>
      </Link>
    </div>
  )
}

export default Confirmation;