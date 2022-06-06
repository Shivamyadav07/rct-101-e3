import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Product from "./Product/Product";

const Products = () => {
  const {productdata,cartdata}=useContext(CartContext);
  return(
    <div>
      {productdata.map(e=>{
        return(
          <Product key={e.id} productdata={e} />
        )
      })}
    </div>
  )
};

export default Products;
