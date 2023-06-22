import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Router>
    <div className="app">
        <Routes>
            {/* <Route path='/' element={<>
            <Header /> <Home /></>} //<></> react fragment works like a div
            /> */}
            <Route path='/login' element={<><Login/></>
            }  />
            <Route path="/checkout" element={<><Header /> <Checkout /></>
            } 
            />
            <Route path='*'
             element = {<><Header /> <Home /></>}
            />
        </Routes>
         </div>
      </Router>
  );
}

export default App;
