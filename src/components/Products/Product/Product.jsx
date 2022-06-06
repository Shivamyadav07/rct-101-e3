import React from "react";

const Product = ({productdata}) => {
  // Note: this id should come from api
  const product = { id:productdata.id};
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{productdata.name}</h3>
      <h6 data-cy="product-description">{productdata.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove from cart</button>
      </div>
    </div>
  );
};

export default Product;
