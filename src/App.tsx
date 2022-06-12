import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";

import { Home } from './components/pages'
import { Sneakers } from './components/pages/sneakers'

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sneakers" element={<Sneakers />} />
      </Routes>
    </div>
  );
}

export default App;
