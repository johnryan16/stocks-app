import React from 'react';
import './App.css';

function getDate() {
  const date = Date.now()
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric'}).format(date)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-label"><b>Stocks</b><div className="App-date">{getDate()}</div></div>
        <div className="App-edit"><button>Edit</button></div>
        
      </header>
    </div>
  );
}

export default App;
