import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/Home"
import Store from "./pages/Store"
import Cart from "./pages/Cart"

// Custom Components
import Navbar from "./components/Navbar"

// Styles
import "./styles/grid.css"
import "./styles/index.css"
import "./styles/badge.css"

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
