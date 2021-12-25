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
            <Route exact path="/coins/:id" element={<CoinDetails />} />
          </Routes>
        </Router>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
// import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { CoinDetails, CoinSummary } from './pages';
// import Header from './components/Header';
// import './App.css';
// import { WatchListContextProvider } from './context/watchListContext';

// const App = () => {
//   return (
//     <div className="container">
//       <WatchListContextProvider>
//         <BrowserRouter>
//           <Header />
//           <Route exact path="/" component={CoinSummary} />
//           <Route path="/coins/:id" component={CoinDetails} />
//         </BrowserRouter>
//       </WatchListContextProvider>
//     </div>
//   );
// };

// export default App;
