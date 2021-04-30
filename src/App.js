import React from 'react';
import './App.css';
import Board from './components/Board/Board';

function App() {
  return (
    <div className="App">
      <Board rowCount={6} columnCount={7} />
    </div>
  );
}

export default App;
