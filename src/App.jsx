import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/Home"
import Store from "./pages/Store"

// Custom Components
import Navbar from "./components/Navbar"

// Styles
import "./styles/grid.css"
import "./styles/index.css"
import "./styles/badge.css"
import Cart from "./pages/Cart"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
