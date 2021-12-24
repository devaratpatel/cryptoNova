import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CoinDetails, CoinSummary } from './pages';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<CoinSummary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
