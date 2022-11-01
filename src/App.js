import React from 'react';

import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {


  

  return (
      <>
      <div className='container-fluid'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      
      </>
  );
}

export default App;
