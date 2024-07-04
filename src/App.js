import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Fixed import
import Home from './Components/Home'

import Header from './Components/Header';
import Blog from './Components/Blog';
import Careers from './Components/Careers';



function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/blog' element={<Blog />}/>
    <Route path='/careers' element={<Careers />}/>




    </Routes>
    </BrowserRouter>
  );
}

export default App;
