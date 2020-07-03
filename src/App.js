import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import StockList from './StockList'
import { styled } from "@material-ui/styles";

const EditButton = styled(Button)({
  color: '#61dafb',
  textTransform: 'none'
})

function getDate() {
  const date = Date.now()
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric'}).format(date)
}

function getStocksList() {
  return [{
      name: 'AAPL',
      price: 45
  }, {
      name: 'TSLA',
      price: 999
  }, {
      name: 'JPM',
      price: 20
  }]
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-label"><b>Stocks</b><div className="App-date">{getDate()}</div></div>
        <div className="App-edit"><EditButton size="large" disableRipple><b>Edit</b></EditButton></div>
      </header>
      <StockList items={getStocksList()}/>
    </div>
  );
}

export default App;
