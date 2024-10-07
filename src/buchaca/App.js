import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './context/CarContext';
import WineDetails from './pages/WineDetails.jsx';
import Home from './pages/Home';


function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />    
          <Route path="/wineDetails/:wineId" element={<WineDetails />} />
     
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

