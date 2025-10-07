import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import Offers from './pages/Offers'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail'
import Banner from './components/Banner'


function App() {

  return (
    <>
    <Router>
      <Header/>
      {/* <Banner/> */}
      <Routes>
        <Route path="/"  />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <Footer />
     
    </>
  )
}

export default App
