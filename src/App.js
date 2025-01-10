import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GenreMenu from './components/GenreMenu';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <GenreMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/genre/:id" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
