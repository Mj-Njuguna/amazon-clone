import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
            <Route path='/' element={<>
            <Header /> <Home /></>} //<></> react fragment works like a div
            />
            <Route path="/checkout" element={<><Header /><h1>I AM A CHECKOUT 💯</h1></>
            } 
            />
            <Route path='*'
             element = {<><Header /> <Home /></>}
            />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
