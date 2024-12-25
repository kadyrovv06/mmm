import React from 'react'
import "./Product.css"

function Product({title, discount, price, present, image}) {
  return (
    <div className={'product'}>
      <img src={image} alt="" />
      <p>{price}</p>
      <h2>{title}</h2>
      <div>{present}</div>
    </div>
  )
}

export default Product
