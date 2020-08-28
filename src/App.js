import React from 'react';
import './App.css';
import Login from './components/Login'
import OrderedList from './components/OrderedList';

const petNames = [];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Enzyme for Testing React
      </header>
      <Login />
      <OrderedList options={petNames} />
    </div>
  );
}

export default App;
