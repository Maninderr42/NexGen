import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Fixed import
import Home from './Components/Home'

import Header from './Components/Header';



function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={<Home />}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
