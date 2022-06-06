import React from 'react'
import Products from './Products/Products'
import { useContext } from "react";
import { CartContext } from '../context/CartContext';

export const Home = () => {
  const {cartdata}=useContext(CartContext);
  return (
    <div>
      <h3>Cart:{cartdata.length}</h3>
      <Products />
    </div>
  )
}
