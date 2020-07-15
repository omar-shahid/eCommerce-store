import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/Home"

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
