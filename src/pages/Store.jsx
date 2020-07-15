import React from "react"
import products from "./../products.json"
import "./../styles/product.css"
import ProductCard from "../components/ProductCard"

function Store() {
  return (
    <div className="container-xl">
      <h1 className="banner-heading text-center">Our Products</h1>
      <br />
      <br />
      {products.products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  )
}

export default Store
