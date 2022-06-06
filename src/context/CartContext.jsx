import axios from "axios";
import React, { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productdata, setproduct] = useState([])
  const [cartdata, setcartdata] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/products")
      .then((res) => {
        setproduct(res.data);
      })
    axios.get("http://localhost:8080/cartItems")
      .then((res) => {
        setcartdata(res.data)
      })
  }, [])

  return <CartContext.Provider value={{productdata,cartdata}} >
    {children}
  </CartContext.Provider>;
};
