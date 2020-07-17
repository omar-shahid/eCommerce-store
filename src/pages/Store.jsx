import React from "react"
import Helmet from "react-helmet"

import ProductCard from "../components/ProductCard"

import products from "./../products.json"

import "./../styles/product.css"

function Store() {
  return (
    <div className="container-xl">
      <Helmet>
        <title>Store - E Commerce Site - BootCamp 2020 Project</title>
      </Helmet>
      <h1 className="banner-heading text-center">Our Products</h1>
      <br />
      <br />
      {products.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Store
