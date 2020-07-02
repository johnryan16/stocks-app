import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import StockList from './StockList'

function getDate() {
  const date = Date.now()
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric'}).format(date)
}

function getStocksList() {
  return [{
      name: 'AAPL'
  }, {
      name: 'TSLA'
  }, {
      name: 'JPM'
  }]
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-label"><b>Stocks</b><div className="App-date">{getDate()}</div></div>
        <div className="App-edit"><Button color="inherit" size="large" disableRipple><b>Edit</b></Button></div>
      </header>
      <StockList items={getStocksList()}/>
    </div>
  );
}

export default App;
