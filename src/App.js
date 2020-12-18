import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Confirmation from './components/Confirmation';
import Pizza from './components/Pizza';
import Home from './components/Home'; 

export default function App() {
  const [placeOrder, setPlaceOrder] = useState({})

  return(
    <>
    <Header />
    <Route path='/' exact component={Home} />
    <Route path='/pizza' component={() => <Pizza setPlaceOrder={setPlaceOrder} />}/>
    <Route path='/confirmation' component={() => <Confirmation placeOrder={placeOrder}/>}/>
    </>
  );
};