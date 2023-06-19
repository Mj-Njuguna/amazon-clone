import React from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router,Route, link, Routes} from 'react-router-dom'
function App() {
  return (
    //BEM naming convention
    
    <div className="app">
  <Routes>
    <Route></Route>
          <Header/>
          <Home/>
    
  </Routes>
        
      
    </div>
    
  );
}

export default App;

