import React from 'react';
import './App.css';
import Header from './Header'
function App() {
  return (
    //BEM naming convention
    <div className="app">
            {/*Header*/}
            <Header/>
            {/*Home*/}
    </div>
  );
}

export default App;
