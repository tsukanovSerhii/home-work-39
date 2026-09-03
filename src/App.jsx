import React from 'react';
import StatefulComponent from './components/StatefulComponent';
import ClassComponent from './components/ClassComponent';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Stateful vs Stateless</h1>
      
      <div className="components-wrapper">
        <StatefulComponent />
        <ClassComponent />
      </div>
    </div>
  );
}

export default App;
