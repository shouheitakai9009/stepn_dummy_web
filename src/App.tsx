import React, { useState, useEffect } from 'react';
import { useLocation, Routes, Route } from "react-router-dom";
import "./styles/App.scss";

import { Home } from './components/pages'

const App = () => {

  const location = useLocation()

  useEffect(() => {
    
  }, [location])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
