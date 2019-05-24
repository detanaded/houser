import React from 'react';

import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Wizard from './Component/Wizard/Wizard';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <Wizard/>
      

    </div>
  );
}

export default App;
