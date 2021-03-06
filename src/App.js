import React from 'react';
import Header from './components/Header/index'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Router> <Routes /> </Router>
    </div>
  );
}

export default App;
