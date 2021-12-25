import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CoinDetails, CoinSummary } from './pages';
import Header from './components/Header';
import './App.css';
import { WatchListContextProvider } from './context/watchListContext';
function App() {
  return (
    <div className="container">
      <WatchListContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<CoinSummary />} />
          </Routes>
        </Router>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
